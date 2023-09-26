using Core.Entities.Identity;
using Core.Entities.Tasks;

namespace Core.Entities.Rooms;

public class Room : BaseEntity
{
    public string Name { get; set; }
    public List<AppUser> AppUsers { get; set; } = new List<AppUser>();
    public List<RoomTask>? TasksList { get; set; } = new List<RoomTask>();
}