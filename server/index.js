import express from "express";
import cors from "cors";
import axios from "axios";
import cron from "node-cron";

import dotenv from "dotenv";
import mongoose from "mongoose";

import { routerZero } from "./src/routes/company.js";

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();
const MONGO_LINK = process.env.MONGO_LINK;
const api = process.env.api;

// APIs
app.use(api, routerZero);

// ping api to KEEP server running
app.get("/ping", (req, res) => {
  try {
    res.json("Jaagte RAHOOO!!");
  } catch (err) {
    console.error(err.message);
  }
});

// Keep Server up and Running
const keepRunning = async () => {
  try {
    const response = await axios.get(
      "https://tracktnp-backend.onrender.com/ping"
    );
    console.log(response.data);
  } catch (err) {
    console.error("Keep Running API failed!! " + err.message);
  }
};

// Cron Job to log a message every minute
// every minutes => "* * * * *"   for 15 min => "*/15 * * * *"
cron.schedule("*/15 * * * *", async () => {
  console.log("Cron job executed at:", new Date());
  await keepRunning();
});

mongoose
  .connect(MONGO_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen("3001", () => {
      console.log("server running🌟✔");
    });
  })
  .catch((err) => {
    console.log(err);
  });
