﻿using System.Security.Claims;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions;

public static class UserManagerExtensions
{

    public static async Task<AppUser> FindByEmailFromClaimsPrincipalAsync(
        this UserManager<AppUser> userManager, ClaimsPrincipal user)
    {
        return await userManager.Users.SingleOrDefaultAsync(x =>
            x.Email == user.FindFirstValue(ClaimTypes.Email));
    }
}