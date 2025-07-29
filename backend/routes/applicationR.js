const express = require("express");
const router = express.Router();
const Application = require("../models/Application"); 


router.post("/applications", async (req, res) => {
  console.log("POST /api/applications hit"); 
  const { name, email, loanAmount, purpose } = req.body;

  try {
    const newApp = new Application({
      name,
      email,
      loanAmount,
      purpose,
    });

    await newApp.save();
    res.status(201).json({ message: "Application saved" });
  } catch (error) {
    res.status(500).json({ message: "Failed to save application", error });
  }
});


router.get('/api/applications', async (req, res) => {
  try {
    const applications = await Application.find(); // assuming you're using MongoDB
    res.json(applications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
