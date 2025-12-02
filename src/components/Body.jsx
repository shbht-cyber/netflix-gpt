import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import Browse from "./browse/Browse";
import Login from "./auth/Login";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;
