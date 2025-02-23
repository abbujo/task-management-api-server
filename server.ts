import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Example GitHub Auth API
app.get("/githubAuth", (req, res) => {
  res.json({ message: "GitHub Auth API working!" });
});

// Example Task API
app.get("/tasks", (req, res) => {
  res.json([{ id: 1, title: "Sample Task" }]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
