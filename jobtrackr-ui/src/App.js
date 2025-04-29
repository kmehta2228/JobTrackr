import React, { useState } from 'react';
import JobList from './components/JobList';
import AddJobForm from './components/AddJobForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [refresh, setRefresh] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
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
      <AddJobForm onJobSaved={handleJobSaved} selectedJob={selectedJob} />
      <JobList refresh={refresh} onEdit={setSelectedJob} searchQuery={searchQuery} />
      <ToastContainer />
    </div>
  );
}

export default App;
