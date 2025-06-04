import { useEffect, useState } from "react";
import { getUser, logout } from "../lib/auth";
import { useNavigate } from "react-router-dom";
import API from "../lib/axios"; // your axios instance

export default function Dashboard() {
  const nav = useNavigate();
  const user = getUser();
  const [users, setUsers] = useState([]);

  const statusColor = {
    Active: "bg-green-500",
    Suspended: "bg-red-500",
    Inactive: "bg-yellow-500",
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await API.get("/users"); // backend should return user list
        setUsers(res.data);
      } catch (err) {
        console.error("Error fetching users", err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Welcome, {user?.name}!</h1>
        <button
          onClick={() => {
            logout();
            nav("/login");
          }}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl overflow-hidden shadow">
          <thead className="bg-gray-100 text-gray-700 text-sm">
            <tr>
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Date Created</th>
              <th className="py-2 px-4 text-left">Role</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, idx) => (
              <tr key={u._id} className="border-t">
                <td className="py-2 px-4">{idx + 1}</td>
                <td className="py-2 px-4 flex items-center gap-2">
                  <img
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(u.name)}&background=random`}
                    alt={u.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="font-medium text-gray-800">{u.name}</span>
                </td>
                <td className="py-2 px-4">
                  {new Date(u.createdAt).toLocaleDateString()}
                </td>
                <td className="py-2 px-4">{u.role || "User"}</td>
                <td className="py-2 px-4 flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${statusColor[u.status || "Active"]}`}
                  ></span>
                  {u.status || "Active"}
                </td>
                <td className="py-2 px-4 flex gap-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    ⚙️
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    ❌
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
