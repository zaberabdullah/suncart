"use client";
import { Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/my-profile", label: "My Profile" },
  ];

  return (
    <div className="navbar bg-[#0f172a] text-white shadow-lg px-6 sticky top-0 z-50">

      <div className="navbar-start">
      <Link href="/" className="flex items-center gap-2 text-2xl font-medium text-amber-400">
  <Sun className="w-7 h-7 text-amber-400" />
  SunCart
</Link>
      </div>


      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-medium rounded-lg transition-all hover:bg-slate-700 ${
                  pathname === link.href
                    ? "text-amber-400 font-bold"
                    : "text-slate-300"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

   {/* eitaaaaaaaaaaaa dynamic korte hobe */}
      <div className="navbar-end flex gap-2">
        <Link
          href="/auth/login"
          className="btn btn-sm bg-transparent border border-amber-200 text-amber-400 hover:bg-amber-400 hover:text-[#0f172a] transition-all"
        >
          Login
        </Link>
        <Link
          href="/auth/register"
          className="btn btn-sm bg-amber-400 text-[#0f172a] font-medium hover:bg-amber-500 border-none transition-all"
        >
          Register
        </Link>


        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost text-amber-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-[#0f172a] rounded-box z-1 mt-3 w-52 p-2 shadow">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-slate-300 hover:text-amber-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Navbar;