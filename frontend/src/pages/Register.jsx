import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../lib/axios";
import { setUserSession } from "../lib/auth";

export default function Register() {
  const [form, setForm] = useState({ name: "", dob: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await API.post("/register", form);
      setUserSession(res.data);
      nav("/dashboard");
    } catch (err) {
      const msg = err?.response?.data?.message || "Registration failed";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Create Account</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        className="input w-full mb-3"
        required
        value={form.name}
        onChange={handleChange}
      />

      <input
        type="date"
        name="dob"
        className="input w-full mb-3"
        required
        value={form.dob}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        className="input w-full mb-3"
        required
        value={form.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        className="input w-full mb-4"
        required
        value={form.password}
        onChange={handleChange}
      />

      {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

      <button type="submit" className="btn w-full" disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </button>
    </form>
  );
}
