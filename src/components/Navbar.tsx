import { Link } from "react-router";
import logo from "/logo.png";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white dark:bg-gray-900 px-6 py-5 shadow-md transition-colors">
      <Link to="/">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-8 w-8 object-contain" />
          <span className="text-xl font-semibold text-gray-800 dark:text-white">
            Task Manager
          </span>
        </div>
      </Link>

      <div className="flex items-center space-x-6">
        <Link
          to="/"
          className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          Tasks
        </Link>
        <Link
          to="/users"
          className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          User
        </Link>
        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
