import React from "react";

type Task = {
  id: number;
  title: string;
  description: string;
  status: "Pending" | "In Progress" | "Completed";
};

const demoTasks: Task[] = [
  {
    id: 1,
    title: "Design Homepage",
    description: "Create the layout and wireframe for the homepage.",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Fix Login Bug",
    description: "Resolve the issue where users can't log in on mobile.",
    status: "Pending",
  },
  {
    id: 3,
    title: "Deploy to Production",
    description: "Deploy the latest version to the live server.",
    status: "Completed",
  },
];

const Tasks = () => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-md shadow-md transition-colors">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
        Tasks
      </h2>
      <ul className="space-y-3">
        {demoTasks.map((task) => (
          <li
            key={task.id}
            className="border border-gray-200 dark:border-gray-700 rounded-md p-3 hover:shadow-sm transition"
          >
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                {task.title}
              </h3>
              <span
                className={`text-xs px-2 py-1 rounded-full font-semibold ${
                  task.status === "Completed"
                    ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
                    : task.status === "In Progress"
                    ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200"
                    : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200"
                }`}
              >
                {task.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {task.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
