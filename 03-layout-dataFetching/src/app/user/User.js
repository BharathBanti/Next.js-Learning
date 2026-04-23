import React from 'react';

function User({ user }) {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg p-5 hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-gray-700">

      <h2 className="text-xl font-semibold text-green-400 mb-2">
        {user.name}
      </h2>

      <p className="text-gray-300">
        <span className="font-medium text-white">Username:</span> {user.username}
      </p>

      <p className="text-gray-300">
        <span className="font-medium text-white">Phone:</span> {user.phone}
      </p>

      <p className="text-gray-300">
        <span className="font-medium text-white">Email:</span> {user.email}
      </p>

      <p className="text-gray-300">
        <span className="font-medium text-white">Website:</span>{" "}
        <a
          href={`https://${user.website}`}
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          {user.website}
        </a>
      </p>
    </div>
  );
}

export default User;