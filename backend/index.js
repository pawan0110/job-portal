import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";

// Routes
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS setup
const allowedOrigins = [
  "http://localhost:5173",
  "https://job-portal-beta-plum.vercel.app" 
];


app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true); // Allow Postman or curl requests
    if (allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error("Not allowed by CORS"));
  },
  credentials: true // Required to send cookies cross-origin
}));

// Test endpoints
app.get("/", (req, res) => res.send("Hello from root!"));
app.get("/home", (req, res) => res.status(200).json({
  message: "I am coming from backend",
  success: true
}));

// API Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', async () => {
  await connectDB();
  console.log(`Server running on port ${PORT}`);
});

