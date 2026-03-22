const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Agent Kanban');
});

app.get('/api/greeting', (req, res) => {
  res.json({
    message: 'Hello from agent-kanban!',
    timestamp: new Date().toISOString(),
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
