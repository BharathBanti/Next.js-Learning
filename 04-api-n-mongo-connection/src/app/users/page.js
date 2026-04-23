"use client";
import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch("/api/users");
    const data = await res.json();

    if (data.success) {
      setUsers(data.data);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        All Users
      </h2>

      {users.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No users found
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <div
              key={user._id}
              className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition duration-300"
            >
              <p className="text-lg font-semibold text-gray-700">
                {user.name}
              </p>

              <p className="text-gray-500 mt-2">
                📧 {user.email}
              </p>

              <p className="text-gray-500">
                🎂 Age: {user.age}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}