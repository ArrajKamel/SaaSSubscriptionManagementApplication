using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;

namespace api.DTOs.Subscription
{
    public class CreateSubscriptionDto
    {
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

    // Custom Validation Attribute for BillingFrequency
    public class BillingFrequencyValidation : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var validFrequencies = new[] { "Monthly", "Yearly" };
            if (value is string frequency && validFrequencies.Contains(frequency))
            {
                return ValidationResult.Success!;
            }

            return new ValidationResult("Billing Frequency must be 'Monthly' or 'Yearly'");
        }
    }

    // Custom Validation Attribute for NextBillingDate
    // public class FutureDateValidation : ValidationAttribute
    // {
    //     protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    //     {
    //         if (value is DateTime date && date > DateTime.UtcNow)
    //         {
    //             return ValidationResult.Success!;
    //         }

    //         return new ValidationResult("Next Billing Date must be a future date");
    //     }
    // }
}