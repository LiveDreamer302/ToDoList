using System.Text.Json.Serialization;
using Core.Entities.Rooms;
using Microsoft.AspNetCore.Identity;

namespace Core.Entities.Identity;

public class AppUser : IdentityUser
{
    public string DisplayName { get; set; }
    [JsonIgnore]
    public List<Room> Rooms { get; set; }
}