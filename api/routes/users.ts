import express from "express";

const router = express.Router();

// Dummy User Routes
router.get("/", (req, res) => {
  res.send("Fetch all users");
});

router.get("/:id", (req, res) => {
  res.send(`Fetch user with ID: ${req.params.id}`);
});

router.put("/:id", (req, res) => {
  res.send(`Update user with ID: ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`Delete user with ID: ${req.params.id}`);
});

export default router;
