const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/start-test', (req, res) => {
  const { testType, textType } = req.body;
  console.log('Received:', testType, textType);
  // Simulate a backend response
  res.json({ message: `✅ Test started: ${testType} with ${textType}` });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
