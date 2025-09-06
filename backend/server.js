
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection (cleaner)
mongoose.connect(process.env.MONGO_URI);

// Schema & Model
const contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  message: String
});
const Contact = mongoose.model('Contact', contactSchema);

// POST endpoint to create a new contact
app.post('/api/contact', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: 'Submitted!' });
  } catch (err) {
    res.status(400).json({ error: 'Error saving data' });
  }
});

// GET endpoint to fetch all contacts
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve contacts' });
  }
});

// Use dynamic port for deployment
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
