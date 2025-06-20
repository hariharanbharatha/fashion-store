const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

const products = [
  { id: 1, name: "T-Shirt", price: "$19.99" },
  { id: 2, name: "Jeans", price: "$39.99" },
  { id: 3, name: "Sneakers", price: "$59.99" }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});

