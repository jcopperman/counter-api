const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// In-memory storage for counters with dummy data
const counters = {
  'namespace1/key1': { count: 10, timestamp: new Date() },
  'namespace1/key2': { count: 5, timestamp: new Date() },
  'namespace2/key3': { count: 15, timestamp: new Date() },
};

// Middleware to parse JSON requests
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, this is the root route!');
});

// Endpoint to increment a counter
app.get('/hit/:namespace/:key', (req, res) => {
  const { namespace, key } = req.params;
  const counterKey = `${namespace}/${key}`;

  if (!counters[counterKey]) {
    // Counter does not exist, return an error response
    return res.status(404).json({ error: 'Counter not found' });
  }

  // Counter exists, increment it
  counters[counterKey].count++;
  counters[counterKey].timestamp = new Date(); // Update the timestamp

  res.json({ value: counters[counterKey].count, timestamp: counters[counterKey].timestamp });
});

// Endpoint to get the value and timestamp of a counter
app.get('/get/:namespace/:key', (req, res) => {
  const { namespace, key } = req.params;
  const counterKey = `${namespace}/${key}`;

  const { count, timestamp } = counters[counterKey] || { count: 0, timestamp: null };

  res.json({ value: count, timestamp });
});

// Endpoint to reset a counter to 0
app.get('/reset/:namespace/:key', (req, res) => {
  const { namespace, key } = req.params;
  const counterKey = `${namespace}/${key}`;

  if (!counters[counterKey]) {
    // Counter does not exist, return an error response
    return res.status(404).json({ error: 'Counter not found' });
  }

  // Reset the counter to 0
  counters[counterKey].count = 0;
  counters[counterKey].timestamp = new Date(); // Update the timestamp

  res.json({ value: counters[counterKey].count, timestamp: counters[counterKey].timestamp });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
