const express = require("express");
const router = express.Router();

const {
  createJob,
  getJobs,
  getJob,
} = require("../controllers/jobController");

router.post("/", createJob);
router.get("/", getJobs);
router.get("/:id", getJob);

module.exports = router;