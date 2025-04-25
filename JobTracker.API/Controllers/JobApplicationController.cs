using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JobTracker.API.Data;
using JobTracker.API.Models;
using JobTracker.API.Services;

namespace JobTracker.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class JobApplicationsController : ControllerBase
    {
        private readonly IJobApplicationService _service;

        public JobApplicationsController(IJobApplicationService service)
        {
            _service = service;
        }

        // GET: api/jobapplications
        [HttpGet]
        public async Task<ActionResult<IEnumerable<JobApplication>>> GetAll()
        {
            return Ok(await _service.GetAllAsync());
        }

        // GET: api/jobapplications/5
        [HttpGet("{id}")]
        public async Task<ActionResult<JobApplication>> GetById(int id)
        {
            var job = await _service.GetByIdAsync(id);
            if (job == null) return NotFound();
            return Ok(job);
        }

        // POST: api/jobapplications
        [HttpPost]
        public async Task<ActionResult<JobApplication>> Create(JobApplication job)
        {
            var createdJob = _service.CreateAsync(job);
            //await _service.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = createdJob.Id }, createdJob);
        }

        // PUT: api/jobapplications/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, JobApplication job)
        {
            var success = await _service.UpdateAsync(id, job);
            if (!success) return BadRequest();
            return NoContent();
        }

        // DELETE: api/jobapplications/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var success = await _service.DeleteAsync(id);
            if (!success) return NotFound();
            return NoContent();
        }
    }
}
