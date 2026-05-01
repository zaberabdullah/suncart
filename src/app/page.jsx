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
      <section className="py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#0f172a]">Popular Products</h2>
          <p className="text-slate-500 mt-2">Our most loved summer essentials</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularProducts.map((product) => (
            <div
              key={product.id}
              className="card bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100"
            >
              <div className="mx-4 mt-4 h-48 overflow-hidden rounded-xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title text-[#0f172a] font-bold">{product.name}</h3>
                <div className="flex items-center gap-1 text-amber-600 text-[16px]">
                  <StarIcon />
                  <span className="text-slate-600">{product.rating}</span>
                </div>
                <p className="text-xl font-medium text-orange-500">${product.price}</p>
                <div className="card-actions justify-end">
                  <Link
                    href={`/products/${product.id}`}
                    className="btn bg-[#0f172a] text-amber-400 border-none hover:bg-slate-800 w-full text-center font-medium"
                  >
                    View Details
                  </Link>
                </div>
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
