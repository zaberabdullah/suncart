"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Sun } from "lucide-react";
import { authClient, signIn } from "@/lib/auth-client";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  const handleLoginFunc = async (data) => {
    const { data: res, error } = await signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      alert(error.message || "Something went wrong!");
    }

    if (res) {
      alert("Login successful!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 border border-slate-100">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sun className="w-7 h-7 text-amber-400" />
          <span className="text-2xl font-extrabold text-[#0f172a]">SunCart</span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-[#0f172a] text-center mb-1">Welcome Back!</h2>
        <p className="text-slate-400 text-sm text-center mb-6">Login to your account</p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
          {/* Email */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-slate-500 text-xs">Email</legend>
            <input
              type="email"
              className="input w-full border border-slate-200 rounded-xl focus:border-amber-400"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </fieldset>

          {/* Password */}
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend text-slate-500 text-xs">Password</legend>
            <input
              type={isShowPassword ? "text" : "password"}
              className="input w-full border border-slate-200 rounded-xl focus:border-amber-400"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
            />
            <span
              className="absolute right-3 top-4 text-[16px] cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </fieldset>

          {/* Login Button */}
          <button className="btn w-full bg-[#0f172a] text-amber-400 border-none hover:bg-slate-800">Login</button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-slate-200"></div>
            <span className="text-slate-400 text-xs">OR</span>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>

          {/* Google Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn w-full bg-white border border-slate-200 text-[#0f172a] hover:bg-slate-50 gap-2"
          >
            <span className="font-bold text-amber-500">G</span>
            Continue with Google
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-sm text-slate-400 mt-6">
          Don't have an account?{" "}
          <Link href="/auth/register" className="text-amber-500 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
