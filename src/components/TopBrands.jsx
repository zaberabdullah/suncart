import { Glasses, Shirt, Sparkles, Waves } from "lucide-react";

const TopBrands = () => {
  return (
    <section className="py-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Top Brands</h2>
        <p className="text-slate-500 mt-2">Trusted brands we carry</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-[#0f172a] border border-amber-400/30 rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center mb-3">
            <Glasses className="w-6 h-6" />
          </div>
          <p className="text-white font-bold">SunShade</p>
          <p className="text-slate-400 text-xs mt-1">Premium Eyewear</p>
        </div>

        <div className="bg-[#0f172a] border rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center mb-3">
            <Shirt className="w-6 h-6 " />
          </div>
          <p className="text-white font-bold">BeachVibes</p>
          <p className="text-slate-400 text-xs mt-1">Beach Fashion</p>
        </div>

        <div className="bg-[#0f172a] border rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center mb-3">
            <Sparkles className="w-6 h-6" />
          </div>
          <p className="text-white font-bold">GlowGuard</p>
          <p className="text-slate-400 text-xs mt-1">Skincare Experts</p>
        </div>

        <div className="bg-[#0f172a] border rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center mb-3">
            <Waves className="w-6 h-6 " />
          </div>
          <p className="text-white font-bold">SplashKing</p>
          <p className="text-slate-400 text-xs mt-1">Pool & Beach Fun</p>
        </div>
      </div>
    </section>
  );
};

export default TopBrands;
