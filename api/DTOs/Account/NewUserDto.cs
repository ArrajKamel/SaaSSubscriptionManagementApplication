using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.DTOs.Account
{
    public class NewUserDto
    {
        public required string UserName { get; set; }
        public required string Email { get; set; }
        public bool IsPremium { get; set; }
        public required string Token { get; set; }
    }
}