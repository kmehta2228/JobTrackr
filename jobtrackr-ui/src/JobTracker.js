import React, { useState } from "react";
import AddJobForm from "./components/AddJobForm";
import JobList from "./components/JobList";

const JobTracker = () => {
  const [refreshFlag, setRefreshFlag] = useState(false);

  const refresh = () => {
    setRefreshFlag((prev) => !prev);
  };

  return (
    <div>
      <AddJobForm refresh={refresh} />
      <JobList refresh={refreshFlag} />
    </div>
  );
};

export default JobTracker;
