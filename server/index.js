require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const PORT = process.env.PORT || 5000
app.use(express.json());
app.use(cors())
app.get(/^\/(auth|cart|browse)\/ping$/, (req, res) => {
  res.status(201).json({ message: "check" })
})
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log('Server running on port', PORT));
  })
  .catch(console.error);