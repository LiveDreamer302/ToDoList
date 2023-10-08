using Core.Entities.Identity;
using Core.Entities.Rooms;
using Core.Entities.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Identity;

public class AppIdentityDbContext : IdentityDbContext<AppUser>
{
    public AppIdentityDbContext(DbContextOptions<AppIdentityDbContext> options) : base(options)
    {
    }

    public DbSet<Room> Rooms { get; set; }
    public DbSet<RoomTask> Tasks { get; set; }
    
    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.Entity<Room>()
            .HasKey(x => x.Id);
        builder.Entity<RoomTask>()
            .HasKey(x => x.Id);
        base.OnModelCreating(builder);
    }
}