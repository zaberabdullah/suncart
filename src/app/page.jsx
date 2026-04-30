"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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

              {/* Badge */}   
              <span className="bg-amber-400/20 text-white border border-amber-400/40 px-4 py-1 rounded-full text-sm font-medium mb-5">
                {slide.badge}
              </span>

              {/* Title */}
              <h1 className="text-2xl md:text-4xl font-medium text-white mb-4 drop-shadow-lg">
                {slide.title}
              </h1>

              {/* Subtitle */}
              <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-xl">
                {slide.subtitle}
              </p>

              {/* Button */}
              <button className="btn btn-md bg-amber-400 text-[#0f172a] font-medium border-none hover:bg-amber-500 hover:scale-105 transition-all shadow-lg">
                Shop Now →
              </button>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}