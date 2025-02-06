import { useRoutes } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../layout/Layout";
import NotFound from "../pages/notfound/Notfound";

const Routers = () => {
  return (
    <>
      {useRoutes([
        {
          path: "/",
          element: <Layout />,
          children: [{ path: "/", element: <Home /> }],
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ])}
    </>
  );
};

export default Routers;
