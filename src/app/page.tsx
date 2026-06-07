import Link from 'next/link';
import Image from 'next/image';
import { products } from '../lib/data';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&auto=format&fit=crop&q=80"
            alt="Solar Panels"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Powering Israel&apos;s Future with Clean Energy
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            The all-in-one marketplace for solar panels, batteries, and maintenance services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/marketplace"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg transition"
            >
              Shop Now
            </Link>
            <Link
              href="/services"
              className="bg-white hover:bg-gray-100 text-black font-bold py-3 px-8 rounded-lg transition"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm font-semibold text-yellow-600 uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-2">{product.name}</h3>
                  <p className="text-gray-600 line-clamp-2 mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">₪{product.price}</span>
                    <Link
                      href={`/marketplace/${product.id}`}
                      className="text-yellow-600 font-semibold hover:text-yellow-700"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/marketplace"
              className="inline-block border-2 border-yellow-500 text-yellow-600 font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 hover:text-white transition"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Why Solar Market IL?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">☀️</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Optimized for Israel</h3>
              <p className="text-gray-600">Products specifically selected for the unique climatic conditions of Israel.</p>
            </div>
            <div>
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🛠️</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Full Service</h3>
              <p className="text-gray-600">From purchase to installation and long-term maintenance, we&apos;ve got you covered.</p>
            </div>
            <div>
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Best Value</h3>
              <p className="text-gray-600">Competitive pricing on top-tier international and local solar brands.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
