using JobTracker.API.Models;

namespace JobTracker.API.Services
{
    public interface IJobApplicationService
    {
        Task<IEnumerable<JobApplication>> GetAllAsync();
        Task<JobApplication?> GetByIdAsync(int id);
        Task<JobApplication> CreateAsync(JobApplication job);
        Task<bool> UpdateAsync(int id, JobApplication job);
        Task<bool> DeleteAsync(int id);
    }
}
