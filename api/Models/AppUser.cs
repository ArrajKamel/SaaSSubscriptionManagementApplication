using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace api.Models
{
    public class AppUser: IdentityUser
    {
        public bool IsPremium { get; set; } = false ;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow; 
    }
}