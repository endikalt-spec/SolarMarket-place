import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solar Market IL | Israel's Premier Solar Marketplace",
  description: "Find solar panels, inverters, batteries and maintenance services for your home or business in Israel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-yellow-600 flex items-center gap-2">
              <span className="text-3xl">☀️</span>
              <span>SolarMarket IL</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8 font-medium">
              <Link href="/marketplace" className="hover:text-yellow-600 transition">Marketplace</Link>
              <Link href="/marketplace?category=maintenance" className="hover:text-yellow-600 transition">Maintenance</Link>
              <Link href="/about" className="hover:text-yellow-600 transition">About</Link>
              <Link href="/contact" className="hover:text-yellow-600 transition">Contact</Link>
            </nav>
            <div className="flex items-center gap-4">
              <button className="bg-yellow-500 text-black px-5 py-2 rounded-lg font-bold hover:bg-yellow-600 transition">
                Get Quote
              </button>
            </div>
          </div>
        </header>
        <main>
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <Link href="/" className="text-xl font-bold text-yellow-500 mb-6 block">
                  SolarMarket IL
                </Link>
                <p className="text-gray-400">
                  Building a greener future for Israel, one panel at a time.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Shop</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/marketplace?category=panels">Solar Panels</Link></li>
                  <li><Link href="/marketplace?category=inverters">Inverters</Link></li>
                  <li><Link href="/marketplace?category=batteries">Batteries</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/marketplace?category=maintenance">Maintenance</Link></li>
                  <li><Link href="/marketplace?category=cleaning">Cleaning</Link></li>
                  <li><Link href="/services">Full Installation</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Tel Aviv, Israel</li>
                  <li>info@solarmarket.co.il</li>
                  <li>+972 03-123-4567</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
              <p>&copy; {new Date().getFullYear()} Solar Market IL. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
