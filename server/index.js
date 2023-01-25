import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import { connect } from "mongoose";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (req, res) => {
  res.send("Hello from DALL-E!");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(process.env.PORT || 8080, () => console.log(`Server has started on port ${process.env.PORT}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
