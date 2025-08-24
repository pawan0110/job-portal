import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { MoreHorizontal } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setAllApplicants } from "@/redux/applicationSlice";
import { APPLICATION_API_END_POINT } from "@/utils/constant";

const shortListingStatus = ["Accepted", "Rejected"];

const ApplicantsTable = () => {
  const dispatch = useDispatch();
  const { applicants } = useSelector((store) => store.application);
  const isArray = Array.isArray(applicants);

  // Function to update status
  const handleStatusUpdate = async (applicationId, status) => {
    try {
      await axios.put(
        `${APPLICATION_API_END_POINT}/${applicationId}/status`,
        { status },
        { withCredentials: true }
      );

      // Update status locally in Redux
      const updatedApplicants = applicants.map((item) =>
        item.applicationId === applicationId
          ? { ...item, status }
          : item
      );
      dispatch(setAllApplicants(updatedApplicants));
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableCaption>List of all applicants for this job</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {!isArray || applicants.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center">
                No applicants found
              </TableCell>
            </TableRow>
          ) : (
            applicants.map((item) => (
              <TableRow key={item.applicationId}>
                <TableCell>{item.fullname || "NA"}</TableCell>
                <TableCell>{item.email || "NA"}</TableCell>
                <TableCell>{item.phoneNumber || "NA"}</TableCell>
                <TableCell>
                  {item.profile?.resume ? (
                    <a
                      className="text-blue-600 hover:underline"
                      href={item.profile.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                  ) : (
                    "NA"
                  )}
                </TableCell>
                <TableCell>
                  {item.createdAt
                    ? new Date(item.createdAt).toLocaleDateString()
                    : "NA"}
                </TableCell>
                <TableCell className="capitalize">
                  {item.status || "pending"}
                </TableCell>
                <TableCell className="text-right">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal className="cursor-pointer" />
                    </PopoverTrigger>
                    <PopoverContent className="w-32">
                      {shortListingStatus.map((statusOption, index) => (
                        <div
                          key={index}
                          className="flex items-center p-2 hover:bg-gray-100 cursor-pointer rounded-md"
                          onClick={() =>
                            handleStatusUpdate(item.applicationId, statusOption.toLowerCase())
                          }
                        >
                          <span>{statusOption}</span>
                        </div>
                      ))}
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ApplicantsTable;
