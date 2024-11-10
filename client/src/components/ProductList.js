import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.name} className="border p-4 rounded-md">
          <img src={product.imageUrl} alt={product.name} className="w-full h-32 object-cover" />
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-600">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
