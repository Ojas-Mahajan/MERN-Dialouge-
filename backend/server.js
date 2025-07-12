const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/dialoguecafe', { useNewUrlParser: true, useUnifiedTopology: true });

// Define Schema & Model
const contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String
});
const Contact = mongoose.model('Contact', contactSchema);

// API endpoint to receive form data
// app.post('/api/contact', async (req, res) => {
//   const { name, phone, email } = req.body;
//   try {
//     const newContact = new Contact({ name, phone, email });
//     await newContact.save();
//     res.status(201).json({ message: 'Submitted!' });
//   } catch (err) {
//     res.status(400).json({ error: 'Error saving data' });
//   }
// });
app.post('/api/contact', async (req, res) => {
  const { name, phone, email } = req.body;
  console.log("Received POST /api/contact", req.body); // ADD THIS LINE
  try {
    const newContact = new Contact({ name, phone, email });
    await newContact.save();
    console.log("Saved to MongoDB:", newContact); // ADD THIS LINE
    res.status(201).json({ message: 'Submitted!' });
  } catch (err) {
    console.error("Error saving:", err);           // ADD THIS LINE
    res.status(400).json({ error: 'Error saving data' });
  }
});


app.listen(5000, () => console.log('Server running on port 5000'));
