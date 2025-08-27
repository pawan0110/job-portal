import React from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";
import { useSelector } from "react-redux";
import useGetAllJobs from "@/hooks/useGetAllJobs";

const Browse = () => {
  useGetAllJobs();
  const { allJobs = [], searchedQuery } = useSelector((store) => store.job || {});

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10">
          Search Results ({allJobs.length}) {searchedQuery && `for "${searchedQuery}"`}
        </h1>
        {allJobs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
            {allJobs.map((job) => (
              <Job key={job._id || job.id} job={job} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-10">
            No jobs found. Try another search!
          </p>
        )}
      </div>
    </div>
  );
};

export default Browse;