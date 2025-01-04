using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;

namespace api.DTOs.Subscription
{
    public class SubscriptionDto
    {
        public int Id { get; set; }
        public string ServiceName { get; set; } = string.Empty;
        public decimal Cost { get; set; }
        public string BillingFrequency { get; set; } = string.Empty; // e.g., Monthly, Yearly
        public string NextBillingDate { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}