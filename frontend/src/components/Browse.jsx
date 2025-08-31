import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { setSearchedQuery } from "@/redux/jobSlice";

const Browse = () => {
  const dispatch = useDispatch();
  const allJobs = useSelector((store) => store.job?.allJobs) || [];

  // ✅ Fetch jobs once (or when searchedQuery changes)
  useGetAllJobs();

  // ✅ Clear search only once when unmounting
  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10">
          Search Results ({allJobs.length})
        </h1>
        {allJobs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
            {allJobs.map((job) => (
              <Job key={job._id} job={job} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No jobs found</p>
        )}
      </div>
    </div>
  );
};

export default Browse;
