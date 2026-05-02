"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { User, Mail, Pencil } from "lucide-react";

export default function MyProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-amber-400"></span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500">Please login to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 border border-slate-100">
        {/* Avatar */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-full bg-amber-400 flex items-center justify-center text-[#0f172a] font-bold text-3xl mb-3">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <h2 className="text-xl font-bold text-[#0f172a]">{user?.name}</h2>
        </div>

        {/* Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
            <User className="w-5 h-5 text-amber-400" />
            <div>
              <p className="text-xs text-slate-400">Full Name</p>
              <p className="text-sm font-medium text-[#0f172a]">{user?.name}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
            <Mail className="w-5 h-5 text-amber-400" />
            <div>
              <p className="text-xs text-slate-400">Email</p>
              <p className="text-sm font-medium text-[#0f172a]">{user?.email}</p>
            </div>
          </div>
        </div>

        {/* Update Button */}
        <Link
          href="/my-profile/update"
          className="btn bg-[#0f172a] text-amber-400 border-none hover:bg-slate-800 w-full mt-6 gap-2"
        >
          <Pencil className="w-4 h-4" />
          Update Profile
        </Link>
      </div>
    </div>
  );
}
