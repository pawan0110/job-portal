import React, { useState, useEffect } from "react";
import * as Popover from "@radix-ui/react-popover";
import { SlidersHorizontal, X } from "lucide-react";

const FilterCard = ({ jobs, onFilterChange }) => {
  const [filters, setFilters] = useState({ Location: "", Industry: "", Salary: "" });

  // Extract unique values for dropdowns
  const locations = [...new Set(jobs.map((job) => job.location).filter(Boolean))];
  const industries = [...new Set(jobs.map((job) => job.company?.name?.trim()).filter(Boolean))];
  const salaries = [...new Set(jobs.map((job) => job.salary).filter(Boolean))];

  // Apply filters whenever filters state changes
  useEffect(() => {
    const filteredJobs = jobs.filter((job) => {
      const locationMatch = filters.Location ? job.location === filters.Location : true;
      const industryMatch = filters.Industry ? job.company?.name?.trim() === filters.Industry : true;
      const salaryMatch = filters.Salary ? String(job.salary) === String(filters.Salary) : true;
      return locationMatch && industryMatch && salaryMatch;
    });
    onFilterChange(filteredJobs);
  }, [filters, jobs]);

  // Handle select change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Reset all filters
  const clearFilters = () => setFilters({ Location: "", Industry: "", Salary: "" });

  return (
    <div className="relative w-full flex justify-end mb-6">
      <Popover.Root>
        <Popover.Trigger asChild>
          <button className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl hover:from-teal-600 hover:to-cyan-700 shadow-md font-semibold transition">
            <SlidersHorizontal className="w-5 h-5" />
            Filters
          </button>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            side="bottom"
            align="end"
            sideOffset={10}
            className="z-50 w-[320px] sm:w-[360px] bg-white rounded-xl shadow-xl p-6 border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-lg font-bold text-gray-800">Filter Jobs</h1>
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-teal-600 transition font-medium"
              >
                <X className="w-4 h-4" />
                Clear
              </button>
            </div>

            {/* Location Filter */}
            <div className="mb-4">
              <label className="block text-gray-600 mb-1">Location</label>
              <select
                name="Location"
                value={filters.Location}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              >
                <option value="">All Locations</option>
                {locations.map((loc, idx) => (
                  <option key={idx} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            {/* Industry Filter */}
            <div className="mb-4">
              <label className="block text-gray-600 mb-1">Industry</label>
              <select
                name="Industry"
                value={filters.Industry}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              >
                <option value="">All Industries</option>
                {industries.map((ind, idx) => (
                  <option key={idx} value={ind}>{ind}</option>
                ))}
              </select>
            </div>

            {/* Salary Filter */}
            <div className="mb-4">
              <label className="block text-gray-600 mb-1">Salary</label>
              <select
                name="Salary"
                value={filters.Salary}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              >
                <option value="">All Salaries</option>
                {salaries.map((sal, idx) => (
                  <option key={idx} value={sal}>{sal}</option>
                ))}
              </select>
            </div>

            {/* Close/Cancel Button */}
            <Popover.Close
              className="mt-3 w-full text-center bg-gray-100 hover:bg-gray-200 py-2 text-sm rounded-lg text-gray-600 transition font-medium"
              aria-label="Close"
            >
              Cancel
            </Popover.Close>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};

export default FilterCard;
