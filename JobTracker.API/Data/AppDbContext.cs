using Microsoft.EntityFrameworkCore;
using JobTracker.API.Models;

namespace JobTracker.API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<JobApplication> JobApplications { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<JobApplication>().HasData(
                new JobApplication
                {
                    Id = 1,
                    CompanyName = "Google",
                    Role = "Software Engineer",
                    Status = "Applied",
                    AppliedDate = DateTime.SpecifyKind(new DateTime(2024, 4, 20), DateTimeKind.Utc),
                    Notes = "Referred by friend"
                },
                new JobApplication
                {
                    Id = 2,
                    CompanyName = "Microsoft",
                    Role = "Cloud Engineer",
                    Status = "Interviewing",
                    AppliedDate = DateTime.SpecifyKind(new DateTime(2024, 4, 18), DateTimeKind.Utc),
                    Notes = "Phone screen done"
                },
                new JobApplication
                {
                    Id = 3,
                    CompanyName = "Amazon",
                    Role = "Backend Developer",
                    Status = "Rejected",
                    AppliedDate = DateTime.SpecifyKind(new DateTime(2024, 4, 10), DateTimeKind.Utc),
                    Notes = "No response"
                }
            );
        }

    }
}
