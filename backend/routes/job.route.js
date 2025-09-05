import express from "express";

import isAuthenticated from "../middlewares/isAuthenticated.js";
import { postJob, getAllJobs, getJobById, getAdminJobs } from "../controllers/job.controller.js";


const router = express.Router();

// ✅ Use appropriate HTTP methods
router.route("/post").post(postJob);//
router.route("/get").get(getAllJobs);
router.route("/getadminjobs").get( getAdminJobs);//
router.route("/get/:id").get(getJobById);//

export default router;
