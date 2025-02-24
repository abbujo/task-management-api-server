import express from "express";

const router = express.Router();

// Dummy Task Routes
router.get("/projects/:projectId/tasks", (req, res) => {
  res.send(`Fetch all tasks for project ID: ${req.params.projectId}`);
});

router.get("/:id", (req, res) => {
  res.send(`Fetch task with ID: ${req.params.id}`);
});

router.post("/", (req, res) => {
  res.send("Create a new task");
});

router.put("/:id", (req, res) => {
  res.send(`Update task with ID: ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`Delete task with ID: ${req.params.id}`);
});

export default router;
