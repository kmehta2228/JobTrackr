import React, { useState } from 'react';
import JobList from './components/JobList';
import AddJobForm from './components/AddJobForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import ViewJobsPage from "./components/ViewJobsPage";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentTab, setCurrentTab] = useState("add");

  const handleJobSaved = () => {
    setRefresh(!refresh);  // force JobList to refresh
    setSelectedJob(null);
  };

  return (

    <div className="min-h-screen bg-gray-100 pt-24">
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <div className="p-8">
        {currentTab === 'add' ? (
          <AddJobForm onJobSaved={handleJobSaved} selectedJob={selectedJob} />
        ) : (
          <ViewJobsPage
            onEdit={(job) => {
              setSelectedJob(job);
              setCurrentTab("add");
            }}
          />
        )}
      </div>

      <ToastContainer />
    </div>

  );
}

export default App;
