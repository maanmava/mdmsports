import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-blue-900 text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold mb-4">MDM Store</h2>
        <nav className="flex flex-col space-y-2">
          <Link href="/" className="hover:underline">🏠 Home</Link>
          <Link href="/login" className="hover:underline">🔐 Login</Link>
          <Link href="/cart" className="hover:underline">🛒 Cart</Link>
          <Link href="/customers" className="hover:underline">👤 Customers</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  );
}
