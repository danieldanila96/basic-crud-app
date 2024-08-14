const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const itemsRoute = require('./routes/items');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/basiccrudapp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Middleware
app.use(bodyParser.json());
app.use('/items', itemsRoute);

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to the Basic CRUD App');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
