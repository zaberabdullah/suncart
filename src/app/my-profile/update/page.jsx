"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function UpdateProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUpdate = async (data) => {
    const { error } = await authClient.updateUser({
      name: data.name,
      image: data.image,
    });

    if (error) {
      alert(error.message || "Something went wrong!");
    } else {
      alert("Profile updated successfully!");
      router.push("/my-profile");
    }
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-amber-400"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 border border-slate-100">
        {/* Title */}
        <h2 className="text-xl font-bold text-[#0f172a] text-center mb-1">Update Profile</h2>
        <p className="text-slate-400 text-sm text-center mb-6">Update your name and photo</p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit(handleUpdate)}>
          {/* Name */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-slate-500 text-xs">Full Name</legend>
            <input
              type="text"
              defaultValue={user?.name}
              className="input w-full border border-slate-200 rounded-xl focus:border-amber-400"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </fieldset>

          {/* Image URL */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-slate-500 text-xs">Photo URL</legend>
            <input
              type="url"
              defaultValue={user?.image}
              className="input w-full border border-slate-200 rounded-xl focus:border-amber-400"
              placeholder="Enter photo URL"
              {...register("image")}
            />
          </fieldset>

          {/* Update Button */}
          <button className="btn w-full bg-[#0f172a] text-amber-400 border-none hover:bg-slate-800">
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
}
