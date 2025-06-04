import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../lib/axios";
import { setUserSession } from "../lib/auth";
import { FaUser, FaLock } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/login", { email, password });
      setUserSession(res.data);
      nav("/dashboard");
    } catch (err) {
      alert(err?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-500 to-teal-700 flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="relative bg-[#1f2a44] text-white p-8 pt-16 rounded-xl shadow-xl w-full max-w-sm"
      >
        {/* SIGN IN banner */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-cyan-400 text-[#1f2a44] font-bold py-2 px-6 rounded-md">
          SIGN IN
         
        </div>

        {/* Avatar */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-full border-4 border-gray-300 flex items-center justify-center">
          <FaUser className="text-3xl text-white" />
        </div>

        {/* Email (Username) */}
        <div className="mb-4 relative">
          <FaUser className="absolute left-3 top-3 text-gray-400" />
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-md bg-[#2d3a5b] placeholder-gray-400 text-white outline-none"
            placeholder="Username"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4 relative">
          <FaLock className="absolute left-3 top-3 text-gray-400" />
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-md bg-[#2d3a5b] placeholder-gray-400 text-white outline-none"
            placeholder="Password"
            required
          />
        </div>

        {/* Remember / Forgot */}
        <div className="flex justify-between items-center text-sm text-gray-300 mb-6">
          <label className="flex items-center">
            <input type="checkbox" className="mr-1 accent-cyan-400" />
            Remember me
          </label>
          <a href="#" className="hover:underline text-cyan-300">Forgot your password?</a>
        </div>

        {/* Login button */}
        <button
          type="submit"
          className="w-full bg-cyan-400 text-[#1f2a44] py-2 rounded-md font-semibold hover:bg-cyan-300 transition duration-200"
        >
          LOGIN
        </button>
      </form>

      {/* Register Link */}
      <p className="absolute bottom-6 text-white text-sm">
        Don't have an account?{" "}
        <a href="/register" className="text-cyan-200 hover:underline">
          Register
        </a>
      </p>
    </div>
  );
}
