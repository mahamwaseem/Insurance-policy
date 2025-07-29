const express = require("express");
const router = express.Router();
const Application = require("../models/Application");

router.post("/", async (req, res) => {
  const { name, email, loanAmount, purpose } = req.body;

  try {
    const newApp = new Application({
      name,
      email,
      loanAmount,
      purpose
    });

    await newApp.save();
    res.status(201).json({ message: "Application saved" });
  } catch (error) {
    res.status(500).json({ message: "Failed to save application", error });
  }
});

module.exports = router;
