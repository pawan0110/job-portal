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
router.post("/register", isAuthenticated, registerCompany);//
router.get("/get", isAuthenticated, getCompany);//
router.get("/get/:id", isAuthenticated, getCompanyById);//
router.put("/update/:id",isAuthenticated, singleUpload, updateCompany);//

export default router;
// import express from "express";
// import { singleUpload } from "../middlewares/multer.js";
// import isAuthenticated from "../middlewares/isAuthenticated.js";
// import {
//   getCompany,
//   getCompanyById,
//   registerCompany,
//   updateCompany,
// } from "../controllers/company.controller.js";

// const router = express.Router();

// // Create a company
// router.post("/", isAuthenticated, registerCompany);

// // Get all companies
// router.get("/", isAuthenticated, getCompany);

// // Get single company by ID
// router.get("/:id", isAuthenticated, getCompanyById);

// // Update company
// router.put("/:id", isAuthenticated, singleUpload, updateCompany);

// export default router;

