import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        {/* Logo + Title */}
        <div className="flex flex-row items-center gap-2 mb-6">
          <Image
            src="/logo/logo.png"
            alt="Acadex Logo"
            width={180}
            height={180}
            className="w-10 h-10"
            priority
          />
          <span className="text-2xl font-bold text-green-600">Acadex</span>
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form className="flex flex-col">
          <div className="flex flex-col mb-3">
            <label className="text-sm mb-1">Email</label>
            <input
              type="email"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Password</label>
            <input
              type="password"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
            />
          </div>

          <div className="text-sm my-2 text-right text-gray-500 cursor-pointer hover:text-green-600">
            Forgot Password?
          </div>

          <button
            type="submit"
            className="mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 hover:scale-105 transition cursor-pointer"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center my-5">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-sm text-gray-500">or continue with</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:scale-105 transition mb-3 w-full cursor-pointer"
          >
            <FcGoogle size={20} />
            <span>Continue with Google</span>
          </button>

          {/* Facebook */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:scale-105 transition w-full cursor-pointer"
          >
            <FaFacebook size={20} className="text-blue-600" />
            <span>Continue with Facebook</span>
          </button>
          <div className="mt-6 text-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <Link
              href="/register"
              className="text-green-600 font-medium cursor-pointer"
            >
              Register here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
