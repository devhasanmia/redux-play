import React from "react";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar: string;
};

const demoUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Manager",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Developer",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 3,
    name: "Alice Brown",
    email: "alice@example.com",
    role: "Designer",
    avatar: "https://i.pravatar.cc/150?img=13",
  },
];

const Users = () => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-md shadow-md transition-colors">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Users
      </h2>
      <ul className="space-y-4">
        {demoUsers.map((user) => (
          <li
            key={user.id}
            className="flex items-center space-x-4 p-3 border border-gray-200 dark:border-gray-700 rounded-md hover:shadow-sm transition"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="text-md font-medium text-gray-800 dark:text-white">
                {user.name}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {user.email}
              </p>
              <span className="text-xs text-blue-600 dark:text-blue-400">
                {user.role}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
