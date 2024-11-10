import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="mb-4 p-4 border rounded-md flex justify-between items-center">
              <img src={item.imageUrl} alt={item.name} className="w-24 h-24" />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="font-bold text-lg mt-4">Total: ${total.toFixed(2)}</div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
