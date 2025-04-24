using Microsoft.EntityFrameworkCore;
using JobTracker.API.Models;

namespace JobTrackr.API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<JobApplication> JobApplications { get; set; }
    }
}
