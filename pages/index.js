import Head from "next/head";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const products = [
    { id: 1, src: "/product1.jpg", name: "Running Shoes", price: 89.99 },
    { id: 2, src: "/product2.jpg", name: "Gym Bag", price: 45.0 },
    { id: 3, src: "/product3.jpg", name: "Fitness Tracker", price: 120.0 }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <Head>
        <title>MDM Sport Store</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-blue-900 text-white p-6 space-y-6">
          <h2 className="text-2xl font-bold mb-4">MDM Store</h2>
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="hover:underline">🏠 Home</Link>
            <Link href="/login" className="hover:underline">🔐 Login</Link>
            <Link href="#" className="hover:underline">🛒 Cart</Link>
            <Link href="#" className="hover:underline">👤 Customers</Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-50">
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow p-4">
                <img src={product.src} alt={product.name} className="w-full h-48 object-cover rounded-md mb-3" />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-blue-700 font-bold">${product.price.toFixed(2)}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-2 w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-700"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </section>

          <section className="bg-white rounded-xl shadow p-6 mt-10">
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
                  onClick={() => alert('Checkout functionality coming soon!')}
                  className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
