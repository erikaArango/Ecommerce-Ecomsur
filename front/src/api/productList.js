import { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.name} - {product.price}</li>
      ))}
    </ul>
  );
}

export default ProductList;