import express from "express";

const router = express.Router();

// Dummy Project Routes
router.get("/", (req, res) => {
  res.send("Fetch all projects");
});

router.get("/:id", (req, res) => {
  res.send(`Fetch project with ID: ${req.params.id}`);
});

router.post("/", (req, res) => {
  res.send("Create a new project");
});

router.put("/:id", (req, res) => {
  res.send(`Update project with ID: ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`Delete project with ID: ${req.params.id}`);
});

export default router;
