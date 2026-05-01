import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import { Glasses, Shirt, Sparkles, StarIcon, Waves } from "lucide-react";
import TopBrands from "@/components/TopBrands";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products");
  return res.json();
}

export default async function Home() {
  const products = await getProducts();
  const popularProducts = products.slice(0, 3);

  return (
    <main className="py-6">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Popular Products */}
      <section className="py-16 bg-white">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Popular Products</h2>
          <p className="text-gray-500 mt-2">Our most loved summer essentials</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all hover:shadow-2xl hover:shadow-gray-50"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="p-6 flex flex-col grow">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-500 transition-colors leading-tight mb-2">
                  {product.name}
                </h3>

                <div className="flex items-center gap-1 mb-4">
                  <StarIcon className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="text-sm font-medium text-gray-600">{product.rating}</span>
                </div>

                <p className="text-xl font-black text-gray-900 mb-6">${product.price}</p>

                <Link
                  href={`/products/${product.id}`}
                  className="mt-auto w-full py-3 text-center bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-orange-500 transition-all active:scale-95"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Summer Care Tips */}
      <section className="py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#0f172a]">Summer Care Tips</h2>
          <p className="text-slate-500 mt-2">Stay healthy and glowing this summer</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "💧",
              title: "Stay Hydrated",
              tips: "Drink at least 8 glasses of water daily. Carry a water bottle everywhere you go during summer.",
            },
            {
              icon: "🧴",
              title: "Use Sunscreen",
              tips: "Apply SPF 50+ sunscreen 20 minutes before going out. Reapply every 2 hours for best protection.",
            },
            {
              icon: "👒",
              title: "Wear Protective Gear",
              tips: "Use hats, sunglasses and light clothing to shield yourself from harmful UV rays.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-amber-50 border border-amber-100 rounded-2xl p-6 hover:shadow-md transition-all duration-300"
            >
              <span className="text-4xl">{item.icon}</span>
              <h3 className="text-xl font-bold text-[#0f172a] mt-3 mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm">{item.tips}</p>
            </div>
          ))}
        </div>
      </section>

      {/* extra section/ top brands */}
      <TopBrands />
    </main>
  );
}
