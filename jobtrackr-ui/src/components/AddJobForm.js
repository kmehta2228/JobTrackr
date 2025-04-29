import React, { useState, useEffect } from "react";
import api from "../api";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddJobForm = ({ onJobSaved, selectedJob }) => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    status: "Applied",
    notes: "",
    appliedDate: new Date()
  });
  const [loading, setLoading] = useState(false);

  // When selectedJob changes, pre-fill form if editing
  useEffect(() => {
    if (selectedJob) {
      setFormData({
        title: selectedJob.role || "",
        company: selectedJob.companyName || "",
        status: selectedJob.status || "Applied",
        notes: selectedJob.notes || "",
        appliedDate: selectedJob.appliedDate ? new Date(selectedJob.appliedDate) : new Date()
      });
    } else {
      // Clear form if not editing
      setFormData({
        title: "",
        company: "",
        status: "Applied",
        notes: "",
      });
    }
  }, [selectedJob]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.title.trim() === "" || formData.company.trim() === "") {
      toast.warn("⚠️ Please fill all required fields!");
      return;
    }

    const jobData = {
      companyName: formData.company,
      role: formData.title,
      status: formData.status,
      notes: formData.notes || "",
      appliedDate: formData.appliedDate.toISOString()
    };
    if (selectedJob) {
      jobData.id = selectedJob.id;
    }
    try {
      setLoading(true);
      if (selectedJob) {
        // If editing, do PUT
        console.log(selectedJob)
        await api.put(`/jobapplications/${selectedJob.id}`, jobData);
        toast.success("✏️ Job Updated Successfully!");
      } else {
        // If adding, do POST
        await api.post("/jobapplications", jobData);
        toast.success("🎉 Job Added Successfully!");
        setFormData({
          title: "",
          company: "",
          status: "Applied",
          notes: "",
          appliedDate: ""
        });
      }

      onJobSaved(); // notify parent to refresh list + clear selected job
    } catch (error) {
      console.error("Error saving job:", error);
      toast.error("❌ Failed to save job.");
    }
    finally {
      setLoading(false); // 👈 Stop loading
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">
          {selectedJob ? "Edit Job" : "Add New Job"}
        </h2>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Job Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter job title"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Company
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Enter company name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Applied</option>
            <option>Interviewing</option>
            <option>Offer Received</option>
            <option>Rejected</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Applied Date
          </label>
          <DatePicker
            selected={formData.appliedDate}
            onChange={(date) => setFormData({ ...formData, appliedDate: date })}
            dateFormat="yyyy-MM-dd"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full p-3 mt-4 font-semibold text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
        >
          {loading ? "Saving..." : (selectedJob ? "Update Job" : "Add Job")}
        </button>
      </form>
    </div>
  );
};

export default AddJobForm;
