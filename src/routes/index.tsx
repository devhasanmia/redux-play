import { createBrowserRouter } from "react-router";
import App from "../App";
import User from "../pages/User";
import Tasks from "../pages/Tasks";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Tasks,
      },
      {
        path: "/users",
        Component: User,
      },
    ],
  },
]);

export default router;
