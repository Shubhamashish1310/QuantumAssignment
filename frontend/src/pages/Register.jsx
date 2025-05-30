import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../lib/axios";
import { setUserSession } from "../lib/auth";

export default function Register() {
  const [form, setForm] = useState({ name: "", dob: "", email: "", password: "" });
  const nav = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/register", form);
      setUserSession(res.data);
      nav("/dashboard");
    } catch (err) {
      alert(err?.response?.data?.message || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleRegister} className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <input className="input" placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input className="input mt-2" type="date" onChange={e => setForm({ ...form, dob: e.target.value })} />
      <input className="input mt-2" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input className="input mt-2" type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button className="btn mt-4" type="submit">Register</button>
    </form>
  );
}
