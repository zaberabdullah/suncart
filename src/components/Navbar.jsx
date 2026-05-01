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
    <nav className="navbar bg-white border-b border-gray-100 px-4 md:px-10 sticky top-0 z-50">
      <div className="navbar-start">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-800">
          <Sun className="w-6 h-6 text-orange-500" />
          <span className="text-orange-500">SunCart</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-colors hover:text-orange-500 ${
                  pathname === link.href ? "text-orange-500" : "text-gray-500"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end gap-4">
        <Link href="/auth/login" className="text-sm font-medium text-gray-600 hover:text-orange-500">
          Login
        </Link>
        <Link
          href="/auth/register"
          className="btn btn-sm bg-gray-900 text-white hover:bg-orange-500 border-none px-6 rounded-md normal-case"
        >
          Register
        </Link>
      </div>

      <div className="dropdown lg:hidden">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </div>
  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 border border-gray-100">
    {navLinks.map((link) => (
      <li key={link.href}>
        <Link href={link.href} className={pathname === link.href ? "text-orange-500 font-bold" : "text-gray-600"}>
          {link.label}
        </Link>
      </li>
    ))}
  </ul>
</div>
    </nav>
  );
};

export default Navbar;