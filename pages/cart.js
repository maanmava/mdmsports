import { useState, useEffect } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, i) => i !== indexToRemove);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold mb-4 text-blue-900">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">No items in cart.</p>
      ) : (
        <ul className="space-y-3 mb-4">
          {cart.map((item, index) => (
            <li key={index} className="flex justify-between items-center">
              <div>
                <span className="font-medium">{item.name}</span> – ${item.price.toFixed(2)}
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <p className="text-right font-bold text-blue-800">Total: ${total.toFixed(2)}</p>

      {cart.length > 0 && (
        <div className="text-right mt-4">
          <button
            onClick={() => alert("Checkout functionality coming soon!")}
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
