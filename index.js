const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('👗 HARIHARANBHARATHA!');
});

app.get('/products', (req, res) => {
  res.json([
    { id: 1, name: 'T-Shirt', price: 499 },
    { id: 2, name: 'Jeans', price: 999 },
    { id: 3, name: 'Jacket', price: 1999 }
  ]);
});

app.listen(3000, () => {
  console.log('Fashion Store running on port 3000');
});

