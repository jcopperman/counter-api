const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// In-memory storage for counters
const counters = {};

// Middleware to parse JSON requests
app.use(express.json());

// Endpoint to increment a counter
app.get('/hit/:namespace/:key', (req, res) => {
  const { namespace, key } = req.params;
  const counterKey = `${namespace}/${key}`;

  if (!counters[counterKey]) {
    counters[counterKey] = 1;
  } else {
    counters[counterKey]++;
  }

  res.json({ value: counters[counterKey] });
});

// Endpoint to get the value of a counter
app.get('/get/:namespace/:key', (req, res) => {
  const { namespace, key } = req.params;
  const counterKey = `${namespace}/${key}`;

  const value = counters[counterKey] || 0;

  res.json({ value });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
