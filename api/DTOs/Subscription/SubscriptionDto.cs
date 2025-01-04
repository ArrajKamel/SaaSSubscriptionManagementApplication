using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using api.Models;

namespace api.DTOs.Subscription
{
    public class SubscriptionDto
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string ServiceName { get; set; } = string.Empty;
        [Required]
        public decimal Cost { get; set; }
        [Required]
        public string BillingFrequency { get; set; } = string.Empty; // e.g., Monthly, Yearly
        [Required]
        public string? NextBillingDate { get; set; }
        [Required]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}