using JobTracker.API.Data;
using JobTracker.API.Models;
using Microsoft.EntityFrameworkCore;

namespace JobTracker.API.Services
{
    public class JobApplicationService : IJobApplicationService
    {
        private readonly AppDbContext _context;

        public JobApplicationService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<JobApplication>> GetAllAsync()
        {
            return await _context.JobApplications.ToListAsync();
        }

        public async Task<JobApplication?> GetByIdAsync(int id)
        {
            return await _context.JobApplications.FindAsync(id);
        }

        public async Task<JobApplication> CreateAsync(JobApplication job)
        {
            _context.JobApplications.Add(job);
            await _context.SaveChangesAsync();
            return job;
        }

        public async Task<bool> UpdateAsync(int id, JobApplication job)
        {
            if (id != job.Id) return false;
            _context.Entry(job).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var job = await _context.JobApplications.FindAsync(id);
            if (job == null) return false;
            _context.JobApplications.Remove(job);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
