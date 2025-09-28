const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

// API: Profit Calculator
app.post('/api/profit', (req, res) => {
  const { crop, yieldKg, price } = req.body;
  const profit = yieldKg * price;
  res.json({ crop, profit });
});

app.listen(PORT, () => {
  console.log(`🚜 Farmers Website running at http://localhost:${PORT}`);
});
