using API.Dtos;
using AutoMapper;
using Core.Entities.Rooms;
using Core.Entities.Tasks;

namespace API.Helpers;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<Core.Entities.Identity.AppUser, RoomUserDto>()
            .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
            .ForMember(dest => dest.DisplayName, opt => opt.MapFrom(src => src.DisplayName))
            .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.Email));
        CreateMap<RoomTask, TasksDto>().ReverseMap();
    }
}