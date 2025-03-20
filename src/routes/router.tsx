import { createRouter, RouterProvider, createRootRoute, createRoute } from "@tanstack/react-router";
import Home from '../pages/Home/Home';
import MainLayout from '../layout/MainLayout/MainLayout';

const Main = () => <MainLayout />;

const rootRoute = createRootRoute({
  component: Main,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
})

const router = createRouter({
  routeTree: rootRoute.addChildren([homeRoute])
})

const AppRouter = () => {
  return <RouterProvider router={router} />;
}

export default AppRouter;