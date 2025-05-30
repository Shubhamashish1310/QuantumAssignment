import { getUser, logout } from "../lib/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const nav = useNavigate();
  const user = getUser();

  return (
    <div className="bg-yellow-200 max-w-md mx-auto mt-8">
      <h1 className="text-xl font-bold">Welcome, {user?.name}!</h1>
      <p className="text-sm text-gray-500">Email: {user?.email}</p>
      <p className="text-sm text-gray-500">DOB: {new Date(user?.dob).toDateString()}</p>
      <button className="btn mt-4" onClick={() => { logout(); nav("/login"); }}>Logout</button>
    </div>
  );
}
