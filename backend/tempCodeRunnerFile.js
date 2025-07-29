const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const applicationRoutes = require("./routes/applicationR");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", applicationRoutes);

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/loanDB ",{

})
.then(() => {
  console.log("MongoDB connected");
  app.listen(5000, () => {
    console.log(`Server running on port `);
  });
})
.catch((err) => console.log(err));
