const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const menuRoutes = require('./routes/menu');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB Atlas connection
const mongoURI = 'mongodb+srv://taruntej947:qXwyBVdljaYy4Kmq@cluster0.hcdp4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/menu', menuRoutes);

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});