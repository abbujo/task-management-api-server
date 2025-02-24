import express from "express";

const router = express.Router();

// Dummy Authentication Routes
router.post("/login", (req, res) => {
  res.send("GitHub OAuth login");
});

router.get("/profile", (req, res) => {
  res.send("User profile route");
});

router.post("/logout", (req, res) => {
  res.send("Logout route");
});

export default router;
