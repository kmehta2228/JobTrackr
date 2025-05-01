import React, { useState, useEffect } from 'react';
import JobList from './components/JobList';
import AddJobForm from './components/AddJobForm';
import Login from "./components/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import ViewJobsPage from "./components/ViewJobsPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentTab, setCurrentTab] = useState("add");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === "loggedin") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleJobSaved = () => {
    setRefresh(!refresh);  // force JobList to refresh
    setSelectedJob(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  if (!isLoggedIn) return <Login onLogin={() => setIsLoggedIn(true)} />;
  return (

    <div className="min-h-screen bg-gray-100 pt-24">
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} onLogout={handleLogout} />

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
