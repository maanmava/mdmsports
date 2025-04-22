import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MDM Sport Store</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="bg-blue-900 text-white py-6 text-center">
        <h1 className="text-3xl font-bold">MDM Sport Store</h1>
      </header>

      <main className="max-w-4xl mx-auto p-6 space-y-10">
        <section className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">Featured Product</h2>
          <img src="/product.jpg" alt="Featured sports item" className="w-full max-h-64 object-cover rounded-lg" />
          <p className="mt-4 text-gray-700">High-quality, reliable, and stylish gear to boost your performance.</p>
          <button className="mt-4 w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800">Add to Cart</button>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-500 py-6">
        &copy; 2025 MDM Sport Store. All rights reserved.
      </footer>
    </div>
  );
}

