import Image from "next/image";
import { StarIcon, ShieldCheck, Truck, RotateCcw, Package } from "lucide-react";
import Link from "next/link";

import products from "../../data/products.json";

export default async function ProductDetails({ params }) {
  const productParams = await params;
  const id = productParams.id;

  const product = products.find((p) => p.id == id);

  //   if (!product) {
  //     return (
  //       <div className="min-h-screen flex flex-col items-center justify-center bg-white">
  //         <h2 className="text-2xl font-bold text-gray-800 mb-4">Product not found!</h2>
  //         <Link
  //           href="/"
  //           className="px-6 py-2 bg-gray-900 text-white rounded-xl hover:bg-orange-500 transition-all"
  //         >
  //           Back to Home
  //         </Link>
  //       </div>
  //     );
  //   }

  return (
    <main className="min-h-screen bg-white pb-20">
      <div className="container mx-auto px-4 py-10">
        {/* Breadcrumb: just learned this */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-10">
          <Link href="/" className="hover:text-orange-500 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="relative aspect-square w-full rounded-[2.5rem] overflow-hidden bg-gray-50 border border-gray-100 shadow-sm">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col pt-4">
            <div className="mb-4">
              <span className="text-[10px] font-black uppercase text-orange-600 bg-orange-50 px-4 py-1.5 rounded-full">
                {product.brand}
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">{product.name}</h1>

            <div className="flex items-center gap-8 mb-8">
              <div className="flex items-center gap-1.5">
                <StarIcon className="w-5 h-5 text-amber-500 fill-amber-500" />
                <span className="font-bold text-gray-900 text-lg">{product.rating}</span>
              </div>
              <div className="flex items-center gap-2 text-sm border-l pl-8 border-gray-200">
                <Package className="w-5 h-5 text-green-500" />
                <span className="font-bold text-green-600 uppercase tracking-wider text-xs">
                  {product.stock} Units left
                </span>
              </div>
            </div>

            <div className="mb-10">
              <p className="text-4xl font-black text-gray-900">${product.price}</p>
            </div>

            <div className="space-y-4 mb-12">
              <h2 className="font-bold text-gray-400 uppercase text-[14px] tracking-[0.2em]">Overview</h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-xl">{product.description}</p>
              <div className="pt-4">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Category: </span>
                <span className="text-xs font-bold text-gray-900 uppercase tracking-widest ml-2">
                  {product.category}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="flex-2 py-5 bg-gray-900 text-white font-bold rounded-2xl hover:bg-orange-600 transition-all active:scale-95 shadow-2xl shadow-gray-200  text-[16px]">
                Add to Cart
              </button>
              <button className="flex-1 py-5 border-2 border-gray-100 text-gray-900 font-bold rounded-2xl hover:bg-gray-200 transition-all active:scale-95 text-[16px]">
                Wishlist
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-10 border-t border-gray-100 mt-4">
              <div className="flex flex-col gap-2">
                <Truck className="w-6 h-6 text-gray-300" />
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-tight">
                  Free Express
                  <br />
                  Shipping
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <ShieldCheck className="w-6 h-6 text-gray-300" />
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-tight">
                  Authentic
                  <br />
                  Product
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <RotateCcw className="w-6 h-6 text-gray-300" />
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-tight">
                  15 Days
                  <br />
                  Easy Return
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
