const express = require("express");
const router = express.Router();

console.log("✅ authRoutes Loaded");

router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Auth Routes Working",
  });
});

const { register, login } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);

module.exports = router;