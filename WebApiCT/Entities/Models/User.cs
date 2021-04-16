﻿using Microsoft.AspNetCore.Identity;

namespace CaloriesTracker.Entities.Models
{
    public class User : IdentityUser
    {
        public override string Id { get; set; }
        public UserProfile UserProfile { get; set; }
    }
}
