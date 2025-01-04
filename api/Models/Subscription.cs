using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    [Table("Subscriptions")]
    public class Subscription
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        [MaxLength(100)]
        public string ServiceName { get; set; } = string.Empty;

        [Required]
        [Column(TypeName = "decimal(10, 2)")]
        public decimal Cost { get; set; }

        [Required]
        [MaxLength(20)]
        public string BillingFrequency { get; set; } = string.Empty; // e.g., Monthly, Yearly

        [Required]
        public string NextBillingDate { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public string AppUserId { get; set; }
        public AppUser AppUser { get; set; }
    }
}