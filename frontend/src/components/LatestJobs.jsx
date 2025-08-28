import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LatestJobs = () => {
  const { alljobs } = useSelector((state) => state.job);
  console.log(alljobs); // <-- check if this logs 6 or 1

  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto my-20 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center">
        <span className="text-amber-400">Latest Job</span> Openings
      </h1>

      {alljobs.length <= 0 ? (
        <span className="block text-center text-gray-500">
          No jobs available
        </span>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {alljobs?.slice(0, 6).map((job) => (
            <LatestJobCards key={job._id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestJobs;
