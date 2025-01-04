using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.DTOs.Subscription
{
    public class UpdateSubscriptionDto
    {
        public int Id { get; set; }
        [Required]
        [MinLength(1, ErrorMessage = "Service Name must be 5 characters")]
        [MaxLength(280, ErrorMessage = "Service Name cannot be over 280 characters")]
        public string ServiceName { get; set; } = string.Empty;
        [Required]
        [Range(0.01, double.MaxValue, ErrorMessage = "Cost must be a positive number")]
        public decimal Cost { get; set; }
        [Required]
        [MaxLength(20)]
        [BillingFrequencyValidation]
        public string BillingFrequency { get; set; } = string.Empty; // e.g., Monthly, Yearly
        [Required]
        // [FutureDateValidation(ErrorMessage = "NextBillingDate must be a future date")]
        public string? NextBillingDate { get; set; }
    }
}