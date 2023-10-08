using System.Text.Json.Serialization;
using Core.Entities.Rooms;

namespace Core.Entities.Tasks;

public class RoomTask : BaseEntity
{
    public string Title { get; set; }
    public string Description { get; set; }
    public DateOnly DeadLine { get; set; }
    public bool IsDone { get; set; }
    [JsonIgnore]
    public Room? Room { get; set; }
}