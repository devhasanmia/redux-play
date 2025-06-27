import type { Itask } from "../interfaces/task.interface";
import { useState } from "react";

interface IProps {
  task: Itask;
}

const TaskCard = ({ task }: IProps) => {
  const [checked, setChecked] = useState(task.isCompleted);
  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <div className="max-w-md w-full p-5 rounded-2xl bg-white dark:bg-gray-900 shadow-lg border border-gray-100 dark:border-gray-700 transition">
      <div className="flex justify-between items-center mb-4">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={checked}
            onChange={handleToggle}
            className="w-5 h-5 accent-green-500"
          />
          <h3
            className={`text-xl font-semibold transition ${
              checked
                ? "text-gray-400 line-through dark:text-gray-500"
                : "text-gray-800 dark:text-white"
            }`}
          >
            {task.title}
          </h3>
        </label>

        <span
          className={`px-3 py-1 text-xs rounded-full font-medium capitalize ${
            task.priority === "High"
              ? "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-100"
              : task.priority === "Medium"
              ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-100"
              : task.priority === "Low"
              ? "bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100"
              : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
          }`}
        >
          {task.priority} Priority
        </span>
      </div>

      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
        {task.description}
      </p>

      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <span>
          <strong className="text-gray-700 dark:text-gray-200">Due:</strong>{" "}
          {task.dueData}
        </span>
        <span
          className={`font-semibold ${
            checked
              ? "text-green-600 dark:text-green-400"
              : "text-orange-600 dark:text-orange-400"
          }`}
        >
          {checked ? "Completed" : "Incomplete"}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
