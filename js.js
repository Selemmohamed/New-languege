// Import express module
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse incoming JSON data
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('Hello World! Welcome to my Node.js App!');
});

// Example route with JSON response
app.get('/api/data', (req, res) => {
  res.json({
    message: 'Here is some sample data!',
    date: new Date(),
    success: true,
  });
});

// POST route to handle data
app.post('/api/data', (req, res) => {
  const receivedData = req.body;
  res.json({
    message: 'Data received successfully!',
    data: receivedData,
  });
});

// 404 Error handling middleware
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

