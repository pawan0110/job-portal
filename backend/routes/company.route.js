import express from "express";
import { singleUpload } from "../middlewares/multer.js";

import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  getCompany,
  getCompanyById,
  registerCompany,
  updateCompany,
} from "../controllers/company.controller.js"; // ✅ Use actual filename

const router = express.Router();

// ✅ Use appropriate HTTP methods
router.post("/register", registerCompany);//
router.get("/get",  getCompany);//
router.get("/get/:id",  getCompanyById);//
router.put("/update/:id", singleUpload, updateCompany);//

export default router;
