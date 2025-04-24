using System.ComponentModel.DataAnnotations;

namespace JobTracker.API.Models
{
    public class JobApplication
    {
        public int Id { get; set; }
        [Required]
        public string CompanyName { get; set; }
        [Required]
        public string Role { get; set; }
        public DateTime AppliedDate { get; set; } = DateTime.UtcNow;
        public string Status { get; set; } = "Applied";
        public string? Notes { get; set; }

    }

}