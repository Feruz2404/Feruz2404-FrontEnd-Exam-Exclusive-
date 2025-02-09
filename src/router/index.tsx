import { SuspenseContainer } from "../config";
import { lazy } from "react";
import { useRoutes } from "react-router-dom";
const Home = lazy(() => import("../pages/home/Home"));
const Abouts = lazy(() => import("../pages/about/Abouts"));
const NotFound = lazy(() => import("../pages/notfound/Notfound"));
const SignIn = lazy(() => import("../pages/signin/SignIn"));
const SignUp_User = lazy(() => import("../pages/signup/SignUp_User"));
const Cart = lazy(() => import("../pages/cart/Carts"));
const Wishlist = lazy(() => import("../pages/wishlist/Wishlits"));
const Login = lazy(() => import("../pages/login/Logins"));
const Contacts = lazy(() => import("../pages/contact/Contacts"));
const MainDetail = lazy(() => import("../pages/detail/Detail"));
const Layout = lazy(() => import("../pages/layout/Layout"));

const Routers = () => {
  return (
    <>
      {useRoutes([
        {
          path: "/",
          element: (
            <SuspenseContainer>
              <Layout />
            </SuspenseContainer>
          ),
          children: [
            {
              path: "/",
              element: (
                <SuspenseContainer>
                  <Home />
                </SuspenseContainer>
              ),
            },
            {
              path: "/about",
              element: (
                <SuspenseContainer>
                  <Abouts />
                </SuspenseContainer>
              ),
            },
            {
              path: "/contact",
              element: (
                <SuspenseContainer>
                  <Contacts />
                </SuspenseContainer>
              ),
            },
            {
              path: "/signup",
              element: (
                <SuspenseContainer>
                  <SignUp_User />
                </SuspenseContainer>
              ),
            },
            {
              path: "/signin",
              element: (
                <SuspenseContainer>
                  <SignIn />
                </SuspenseContainer>
              ),
            },
            {
              path: "/login",
              element: (
                <SuspenseContainer>
                  <Login />
                </SuspenseContainer>
              ),
            },
            {
              path: "/wishlist",
              element: (
                <SuspenseContainer>
                  <Wishlist />
                </SuspenseContainer>
              ),
            },
            {
              path: "/cart",
              element: (
                <SuspenseContainer>
                  <Cart />
                </SuspenseContainer>
              ),
            },
            {
              path: "/product/:id",
              element: (
                <SuspenseContainer>
                  <MainDetail />
                </SuspenseContainer>
              ),
            },

            {
              path: "*",
              element: (
                <SuspenseContainer>
                  <NotFound />
                </SuspenseContainer>
              ),
            },
          ],
        }
      ])}
    </>
  );
};

export default Routers;
