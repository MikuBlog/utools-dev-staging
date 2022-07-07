import React, { lazy } from "react";
import { Navigate, RouteObject } from "react-router";
const Welcome = lazy(() => import('@/views/welcome'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Welcome/>
  },
  {
    path: '/',
    element: <Navigate to="/"/>
  }
];

export default routes;