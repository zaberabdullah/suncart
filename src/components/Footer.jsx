import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#FFFBF5] text-slate-700 pt-16 pb-8 border-t-4 border-orange-400">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-orange-500">SunCart</h2>
            <p className="text-sm leading-relaxed text-slate-500">
              Your favorite summer essentials store. High quality products delivered straight to your door.
            </p>
          </div>

    
          <div>
            <h3 className="font-bold text-slate-900 mb-6">Explore</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-orange-500 transition-colors">Products</Link></li>
              <li><Link href="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
            </ul>
          </div>

    
          <div>
            <h3 className="font-bold text-slate-900 mb-6">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/contact" className="hover:text-orange-500 transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-orange-500 transition-colors">FAQ</Link></li>
              <li><Link href="/privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-bold text-slate-900 mb-6">Get Updates</h3>
            <div className="join w-full">
              <input 
                className="input input-bordered join-item w-full bg-white border-orange-200 focus:outline-orange-400" 
                placeholder="Email address" 
              />
              <button className="btn bg-orange-500 hover:bg-orange-600 border-none text-white join-item uppercase">
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-100 pt-8 text-center text-xs text-slate-400">
          <p>© 2026 SunCart. We Value your choice</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;