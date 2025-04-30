import React, { useState } from "react";
import JobList from "./JobList";

const ViewJobsPage = ({ onEdit }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    return (
        <div className="space-y-6">
            {/* Search Input */}
            <input
                type="text"
                placeholder="Search by Role or Company..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Status Filter Buttons */}
            <div className="flex flex-wrap gap-2">
                {["All", "Applied", "Interviewing", "Offer Received", "Rejected"].map((status) => (
                    <button
                        key={status}
                        onClick={() => setStatusFilter(status)}
                        className={`px-4 py-2 rounded-lg font-semibold ${statusFilter === status
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                    >
                        {status}
                    </button>
                ))}
            </div>

            {/* Job List */}
            <JobList onEdit={onEdit} searchQuery={searchQuery} statusFilter={statusFilter} />
        </div>
    );
};

export default ViewJobsPage;
