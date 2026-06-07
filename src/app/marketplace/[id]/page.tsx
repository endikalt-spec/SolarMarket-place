import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '../../../lib/data';

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/marketplace"
        className="text-gray-500 hover:text-yellow-600 mb-8 inline-flex items-center gap-2 transition"
      >
        ← Back to Marketplace
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
        {/* Product Image */}
        <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <span className="text-sm font-bold text-yellow-600 uppercase tracking-widest mb-2">
            {product.category}
          </span>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-3xl font-bold text-gray-900 mb-6">₪{product.price}</p>

          <div className="prose prose-lg text-gray-600 mb-8">
            <p>{product.description}</p>
          </div>

          {product.specs && (
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Specifications</h3>
              <div className="bg-gray-50 rounded-xl p-6 grid grid-cols-1 gap-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b border-gray-200 pb-2 last:border-0 last:pb-0">
                    <span className="font-medium text-gray-500">{key}</span>
                    <span className="font-bold text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-auto flex flex-col gap-4">
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 rounded-xl transition shadow-lg shadow-yellow-100 flex items-center justify-center gap-2 text-lg">
              <span>{product.isService ? 'Request Service' : 'Add to Cart'}</span>
            </button>
            <button className="w-full border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 font-bold py-4 rounded-xl transition flex items-center justify-center gap-2">
              Get Expert Advice
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-24">
        <h2 className="text-2xl font-bold mb-8">Similar Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products
            .filter((p) => p.category === product.category && p.id !== product.id)
            .slice(0, 4)
            .map((item) => (
              <Link key={item.id} href={`/marketplace/${item.id}`} className="group">
                <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>
                <h4 className="font-bold group-hover:text-yellow-600 transition">{item.name}</h4>
                <p className="text-gray-600">₪{item.price}</p>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
