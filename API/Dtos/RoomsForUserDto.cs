using Core.Entities.Tasks;

namespace API.Dtos;

public class RoomsForUserDto
{
    public string Name { get; set; }
    public List<RoomTask>? TasksList { get; set; } = new List<RoomTask>();
}