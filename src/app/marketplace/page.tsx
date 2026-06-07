import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../lib/data';
import { Category } from '../../types';

export default async function MarketplacePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;

  const filteredProducts = category
    ? products.filter(p => p.category === category)
    : products;

  const categories: { id: Category | ''; label: string }[] = [
    { id: '', label: 'All Products' },
    { id: 'panels', label: 'Solar Panels' },
    { id: 'inverters', label: 'Inverters' },
    { id: 'batteries', label: 'Batteries' },
    { id: 'cleaning', label: 'Cleaning' },
    { id: 'maintenance', label: 'Maintenance' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <h2 className="text-xl font-bold mb-6">Categories</h2>
          <div className="flex flex-col gap-2">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={cat.id ? `/marketplace?category=${cat.id}` : '/marketplace'}
                className={`px-4 py-2 rounded-lg transition ${
                  (category === cat.id || (!category && !cat.id))
                    ? 'bg-yellow-500 text-black font-bold'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold capitalize">
              {category ? `${category} for Solar Systems` : 'All Solar Products & Services'}
            </h1>
            <p className="text-gray-600">{filteredProducts.length} items found</p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/marketplace/${product.id}`}
                  className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition"
                >
                  <div className="relative h-48 bg-gray-200">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-yellow-600 uppercase tracking-widest">
                      {product.category}
                    </span>
                    <h3 className="text-lg font-bold mt-1 mb-2 group-hover:text-yellow-600 transition">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xl font-bold text-gray-900">₪{product.price}</span>
                      <button className="bg-gray-900 text-white p-2 rounded-lg hover:bg-yellow-500 hover:text-black transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-xl">
              <p className="text-xl text-gray-500">No products found in this category.</p>
              <Link href="/marketplace" className="text-yellow-600 mt-4 inline-block font-bold">
                View all products
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
