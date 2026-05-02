"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Sun } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/my-profile", label: "My Profile" },
  ];

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
  };

  return (
    <div className="navbar bg-[#0f172a] text-white shadow-lg px-6 sticky top-0 z-50">
      {/* Logo */}
      <div className="navbar-start">
        <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold tracking-wide text-amber-400">
          <Sun className="w-7 h-7 text-amber-400" />
          SunCart
        </Link>
      </div>

      {/* Desktop Nav Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-medium rounded-lg transition-all hover:bg-slate-700 ${
                  pathname === link.href ? "text-amber-400 font-bold" : "text-slate-300"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end flex gap-2">
        {isPending ? (
          <span className="loading loading-spinner loading-sm text-amber-400"></span>
        ) : user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-9 rounded-full border-2 border-amber-400 overflow-hidden">
                {user?.image ? (
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={36}
                    height={36}
                    className="rounded-full w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-amber-400 flex items-center justify-center text-[#0f172a] font-bold text-sm">
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#0f172a] border border-slate-700 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="px-3 py-2 text-slate-400 text-xs border-b border-slate-700 mb-1">{user?.name}</li>
              <li>
                <Link href="/my-profile" className="text-slate-300 hover:text-amber-400">
                  My Profile
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className="text-red-400 hover:text-red-300">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link
              href="/auth/login"
              className="btn btn-sm bg-transparent border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-[#0f172a] transition-all"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="btn btn-sm bg-amber-400 text-[#0f172a] font-bold hover:bg-amber-500 border-none transition-all"
            >
              Register
            </Link>
          </>
        )}

        {/* Mobile Hamburger */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost text-amber-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#0f172a] rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
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
