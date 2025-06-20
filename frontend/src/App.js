import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="App">
      <h1>🛍️ Fashion Store</h1>
      <div className="products">
        {products.map(p => (
          <div key={p.id} className="product-card">
            <h2>{p.name}</h2>
            <p>{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

