import express from "express";

const router = express.Router();

// Dummy Log Routes
router.get("/", (req, res) => {
  res.send("Fetch system logs");
});

export default router;
