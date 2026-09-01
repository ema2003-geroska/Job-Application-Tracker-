import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Job Application Tracker API is running!"
  });
});

export default app;