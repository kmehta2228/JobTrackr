import React, { useState } from 'react';
import JobList from './components/JobList';
import AddJobForm from './components/AddJobForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [refresh, setRefresh] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const handleJobSaved = () => {
    setRefresh(!refresh);  // force JobList to refresh
    setSelectedJob(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>💼 JobTrackr</h1>
      <input
        type="text"
        placeholder="Search by Role or Company..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-2 mb-6 border rounded-md w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex flex-wrap gap-2 mb-6">
        {["All", "Applied", "Interviewing", "Offer Received", "Rejected"].map((status) => (
          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            className={`px-4 py-2 rounded-lg font-semibold ${statusFilter === status ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
          >
            {status}
          </button>
        ))}
      </div>
      <AddJobForm onJobSaved={handleJobSaved} selectedJob={selectedJob} />
      <JobList refresh={refresh} onEdit={setSelectedJob} searchQuery={searchQuery} statusFilter={statusFilter} />
      <ToastContainer />
    </div>
  );
}

export default App;
