import { Outlet, createRootRoute } from "@tanstack/react-router";
import { NavBar, Header, Footer } from "../components";

export const Route = createRootRoute({
  // component: Outlet,
  component: () => (
    <>
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  ),
});
