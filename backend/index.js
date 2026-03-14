const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Contact = require("./model/contactmodel");
// config .env
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Basic Route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, contact, message } = req.body;
    const newContact = new Contact({ name, contact, message });
    await newContact.save();
    res.status(201).json({
      message: `🎉 Thanks for reaching out! We’ve received your message.We will connect with you soon.`
    });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
