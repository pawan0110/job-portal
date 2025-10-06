// import express from "express";

// import isAuthenticated from "../middlewares/isAuthenticated.js";
// import {
//   applyJob,
//   getApplicants,
//   getAppliedJobs,
//   updateStatus,
// } from "../controllers/application.controller.js";
// // ✅ Use actual filename

// const router = express.Router();

// // ✅ Use appropriate HTTP methods
// router.route("/apply/:id").get(isAuthenticated, applyJob);//
// router.route("/get").get( isAuthenticated,getAppliedJobs);//
// router.route("/:id/applicants").get( isAuthenticated, getApplicants);//
// router.route("/status/:id/update").post(isAuthenticated, updateStatus);//

// export default router;

import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  applyJob,
  getApplicants,
  getAppliedJobs,
  updateStatus,
} from "../controllers/application.controller.js";

const router = express.Router();

// Apply to a job
router.post("/:jobId/apply", isAuthenticated, applyJob);

// Get all jobs applied by the user
router.get("/", isAuthenticated, getAppliedJobs);

// Get applicants for a job
router.get("/job/:jobId/applicants", isAuthenticated, getApplicants);

// Update application status
router.patch("/:applicationId/status", isAuthenticated, updateStatus);

export default router;

