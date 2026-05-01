"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

const slides = [
  {
    id: 1,
    badge: "🔥 Summer Sale",
    title: "50% OFF This Season!",
    subtitle: "Shop sunglasses, outfits & beach essentials",
  },
  {
    id: 2,
    badge: "☀️ Hot Deals",
    title: "Stay Cool, Look Cool",
    subtitle: "Premium summer collection at unbeatable prices",
  },
  {
    id: 3,
    badge: "😎 New Arrivals",
    title: "Summer Essentials Store",
    subtitle: "Everything you need for the perfect summer",
  },
];

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 3)));
  }, []);

  return (
    <main className="py-6">
      {/* Hero Slider */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full rounded-2xl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[420px] bg-[#0f172a] rounded-2xl flex flex-col items-center justify-center text-center px-6 overflow-hidden">
              <span className="bg-amber-400/20 text-white border border-amber-400/40 px-4 py-1 rounded-full text-sm font-medium mb-5">
                {slide.badge}
              </span>
              <h1 className="text-2xl md:text-4xl font-medium text-white mb-4 drop-shadow-lg">{slide.title}</h1>
              <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-xl">{slide.subtitle}</p>
              <button className="btn btn-md bg-amber-400 text-[#0f172a] font-medium border-none hover:bg-amber-500 hover:scale-105 transition-all shadow-lg">
                Shop Now →
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Popular Products */}
      <section className="py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#0f172a]">🔥 Popular Products</h2>
          <p className="text-slate-500 mt-2">Our most loved summer essentials</p>
        </div>

        {products.length === 0 ? (
          <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg text-amber-400"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="card bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100"
              >
                <div className="overflow-hidden rounded-t-lg h-48 w-full relative">
                  <Image src={product.image} alt={product.name} fill className="object-cover object-center" />
                </div>
                <div className="card-body">
                  <h3 className="card-title text-[#0f172a] font-bold">{product.name}</h3>
                  <div className="flex items-center gap-1 text-amber-500 ">
                    <Star /> <span className="text-black text-lg">{product.rating}</span>
                  </div>
                  <p className="text-xl font-medium text-amber-800">${product.price}</p>
                  <div className="card-actions justify-end">
                    <Link
                      href={`/products/${product.id}`}
                      className="btn bg-[#0f172a] text-amber-400 border-none hover:bg-slate-800 w-full text-center"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* summer care tips */}

      
    </main>
  );
}
