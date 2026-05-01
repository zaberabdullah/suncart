"use client";
import Link from "next/link";
import { MoveLeft, Sun } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 bg-white">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-orange-100/50 rounded-full blur-3xl scale-150"></div>

        <div className="relative flex flex-col items-center">
          <h1 className="text-[150px] font-black text-gray-900 leading-none tracking-tighter">404</h1>
          <div className="absolute top-1/2 -translate-y-1/2 bg-white px-4 py-1 rounded-full border border-gray-100 shadow-sm flex items-center gap-2">
            <Sun className="w-5 h-5 text-orange-500 animate-spin-slow" />
            <span className="text-sm font-bold text-gray-800 uppercase tracking-widest">Lost in Summer</span>
          </div>
        </div>
      </div>

      <div className="max-w-md">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Oops! This beach is empty.</h2>
        <p className="text-gray-500 mb-10 leading-relaxed">
          The page you are looking for has been moved or doesn't exist anymore. Let’s get you back to the sunshine.
        </p>

        <Link
          href="/"
          className="group inline-flex items-center gap-3 bg-gray-900 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-xl shadow-gray-200"
        >
          <MoveLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>

      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-20"></div>
    </div>
  );
}
