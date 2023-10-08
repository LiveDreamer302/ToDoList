using System.Security.Claims;
using API.Dtos;
using API.Errors;
using AutoMapper;
using Core.Entities.Identity;
using Core.Entities.Rooms;
using Core.Entities.Tasks;
using Core.Interfaces;
using Infrastructure.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace API.Controllers;

public class RoomsController : BaseApiController
{
    private readonly AppIdentityDbContext _context;
    private readonly UserManager<AppUser> _userManager;
    private readonly IMapper _mapper;

    public RoomsController(AppIdentityDbContext context, UserManager<AppUser> userManager, IMapper mapper)
    {
        _context = context;
        _userManager = userManager;
        _mapper = mapper;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Room>>> GetRoomsAsync() // Returns all rooms from database
    {
        var room = await _context.Rooms
            .Include(r => r.AppUsers)
            .Include(r => r.TasksList)
            .Select(r => new
            {
                RoomId = r.Id,
                RoomName = r.Name,
                AppUsers = r.AppUsers.Select(appUser => _mapper.Map<RoomUserDto>(appUser)).ToList(),
                Tasks = r.TasksList
            })
            .ToListAsync();

        return Ok(room);
    }

    [HttpGet("/room/{roomId}")]
    public async Task<ActionResult<Room>> GetRoomByIdAsync(int roomId) // Returns a room by id. Will be usefull when entering in an specific room to view tasks
    {
        var room = await _context.Rooms
            .Where(x => x.Id == roomId)
            .Include(r => r.AppUsers)
            .Include(r => r.TasksList)
            .Select(r => new
            {
                RoomId = r.Id,
                RoomName = r.Name,
                AppUsers = r.AppUsers.Select(appUser => _mapper.Map<RoomUserDto>(appUser)).ToList(),
                Tasks = r.TasksList
            })
            .ToListAsync();

        return Ok(room);
    }

    [HttpDelete("/deletetask/{taskId}")]
    public async Task<ActionResult> DeleteTaskAsync(int taskId)  // Deletes an task by its id
    {
        var taskToDelete = await _context.Tasks.FirstOrDefaultAsync(e => e.Id == taskId);

        if (taskToDelete != null)
        {
            _context.Tasks.Remove(taskToDelete); 
            await _context.SaveChangesAsync();
            return Ok();
        }
        else
        {
            return BadRequest(new ApiResponse(404));
        }
    }

    [Authorize]
    [HttpPost("createroom")]
    public async Task<ActionResult<Room>> CreateRoomAsync(RoomDto request) // Creates room. Requires just a name for the room from user
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier); 
        AppUser user = null; 
        if (!userId.IsNullOrEmpty())
        {
            user = await _userManager.FindByIdAsync(userId);
        }
    
        var room = new Room
        {
            Name = request.Name,
            AppUsers = new List<AppUser>{user}
        };

        _context.Rooms.Add(room);
        await _context.SaveChangesAsync();

        return Ok(room);
    }

    [HttpPost("adduser/{roomId}")]
    public async Task<ActionResult> AddMemberAsync([FromQuery]string email, int roomId) // Adds a member to room by its email. Needs member email and room id.
    {
        var room = await _context.Rooms.FirstOrDefaultAsync(x => x.Id == roomId);

        var user = await _context.Users.FirstOrDefaultAsync(x => x.Email == email);
        
        room.AppUsers.Add(user);

        try
        {
            await _context.SaveChangesAsync();
            return Ok(room); 
        }
        catch (DbUpdateException)
        {
            return StatusCode(500, new ApiResponse(500, "Failed to update the database"));
        }
    }

    [HttpPost("{roomId}/addtask")]
    public async Task<ActionResult> AddTaskAsync(int roomId, [FromBody]TasksDto task) // Add task to an existing room. Requires  room id an Title, description and deadline.
    {
        var room = await _context.Rooms.FirstOrDefaultAsync(x => x.Id == roomId);
        var taskToAdd = _mapper.Map<TasksDto, RoomTask>(task);
        taskToAdd.IsDone = false;
        room.TasksList.Add(taskToAdd);
        
        await _context.SaveChangesAsync();
        return Ok();
    }
    
    
    
    [HttpDelete("delete/{id}")] 
    public async Task<ActionResult> DeleteRoomAsync(int id) // Deletes a room by its id
    {
        var roomToDelete = await _context.Rooms.FindAsync(id);

        if (roomToDelete == null)
        {
            return NotFound(); 
        }

        _context.Rooms.Remove(roomToDelete);
        await _context.SaveChangesAsync();

        return NoContent(); 
    }

}