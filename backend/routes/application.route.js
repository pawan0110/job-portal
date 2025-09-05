import express from "express";

import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  applyJob,
  getApplicants,
  getAppliedJobs,
  updateStatus,
} from "../controllers/application.controller.js";
// ✅ Use actual filename

const router = express.Router();

// ✅ Use appropriate HTTP methods
router.route("/apply/:id").get( applyJob);//
router.route("/get").get( getAppliedJobs);//
router.route("/:id/applicants").get( getApplicants);//
router.route("/status/:id/update").post(updateStatus);//

export default router;
