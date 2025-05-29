import express from "express";

// require("dotenv").config();
import { config as configEnv } from "dotenv";

import cors from "cors";

import multer from "multer";

import bodyParser from "body-parser";

import authRoutes from "./routes/authRoutes.js"; // Adjust the path as necessary

const app = express();

import { connectDB } from "./lib/db.js"; // Adjust the path as necessary

configEnv();

const upload = multer({ dest: "uploads/" });

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use(
  cors({
    origin: "*", // Allow all origins for development; adjust in production
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const authentication = (req, res, next) => {
  // return;
  next();
};

app.use("/api/auth", authRoutes);
app.get("/", upload.single("avatar"), authentication, (req, res) => {
  res.send("Welcome to the API");
});

// console.log("Email:", email);
console.log("JWT_SECRET:", process.env.JWT_SECRET);
// console.log("MongoDB User Model:", User);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
  connectDB();
});
