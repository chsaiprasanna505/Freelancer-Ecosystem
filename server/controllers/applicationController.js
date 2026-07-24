const Application = require("../models/Application");

// Apply for Job
exports.applyJob = async (req, res) => {
  try {
    const application = await Application.create(req.body);

    res.status(201).json({
      success: true,
      message: "Application Submitted Successfully",
      application,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Applications
// Get Applications of Logged Freelancer
exports.getApplications = async (req, res) => {
  try {
    const { freelancer } = req.query;

    const applications = await Application.find({
      freelancer,
    })
      .populate("job")
      .populate("freelancer");

    res.status(200).json({
      success: true,
      applications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};