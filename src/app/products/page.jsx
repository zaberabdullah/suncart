import Image from "next/image";
import Link from "next/link";
import products from "../data/products.json";

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen bg-white">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Our Collection</h1>
        <p className="text-gray-500 mt-2">Premium summer essentials curated for you.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all hover:shadow-2xl hover:shadow-gray-100"
          >
            <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5 flex flex-col grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-800 group-hover:text-orange-500 transition-colors">
                  {product.name}
                </h3>
                <span className="text-sm font-black text-gray-900">${product.price}</span>
              </div>

              <p className="text-sm text-gray-500 line-clamp-2 mb-5">{product.description}</p>

              <Link
                href={`/products/${product.id}`}
                className="mt-auto w-full py-2.5 text-center bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-orange-500 transition-all active:scale-95"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
