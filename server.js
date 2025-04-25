const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

// Define a Mongoose model for the 'idnes' collection
const IdnesSchema = new mongoose.Schema({
    title: String,
    content: String,
    // Add other fields as necessary based on your data structure
});

const Idnes = mongoose.model('Idnes', IdnesSchema);

// Sample route to fetch all documents from the 'idnes' collection
app.get('/api/idnes', async (req, res) => {
    try {
        const documents = await Idnes.find();
        res.json(documents);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Sample route
app.get('/', (req, res) => {
    res.send('Welcome to the Blog API!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});