using Core.Entities.Rooms;

namespace Core.Interfaces;

public interface IRoomRepository
{
    Task<IEnumerable<Room>> GetRoomsAsync();
    Task<Room> CreateRoomAsync(Room room);
}