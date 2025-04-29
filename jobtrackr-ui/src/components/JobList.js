import React, { useEffect, useState } from 'react';
import api from '../api';
import { toast } from 'react-toastify';

const JobList = ({ refresh, onEdit, searchQuery }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    api.get('/jobapplications')
      .then(res => setJobs(res.data))
      .catch(err => console.error("Error fetching jobs:", err));
  }, [refresh]);

  const handleEdit = (job) => {
    onEdit(job);  // Pass selected job up to App.js
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      api.delete(`/jobapplications/${id}`)
        .then(() => {
          console.log("Job deleted successfully!");
          setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
          toast.success("🗑️ Job deleted successfully!");
        })
        .catch((err) => {
          console.error("Error deleting job:", err);
          toast.error("❌ Failed to delete job.");
        });
    }
  };

  // 🔥 AFTER all functions, ADD this:
  const filteredJobs = jobs.filter((job) => {
    const roleMatch = job.role.toLowerCase().includes(searchQuery.toLowerCase());
    const companyMatch = job.companyName.toLowerCase().includes(searchQuery.toLowerCase());
    return roleMatch || companyMatch;
  });

  // 🔥 THEN your return()
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Job Applications</h1>

      {filteredJobs.length === 0 ? (
        <p className="text-center text-gray-500">No matching jobs found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow space-y-4">
              <h2 className="text-xl font-semibold">{job.role}</h2>
              <p className="text-gray-600">{job.companyName}</p>
              <p className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${job.status === "Applied"
                ? "bg-blue-100 text-blue-800"
                : job.status === "Interviewing"
                  ? "bg-yellow-100 text-yellow-800"
                  : job.status === "Offer Received"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}>
                {job.status}
              </p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleEdit(job)}
                  className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 focus:outline-none"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(job.id)}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;
