import React from "react";
const Landing = React.lazy(() => import("../pages/landing/LandingContainer"));
const Pricing = React.lazy(() => import("../pages/pricing/Pricing"));

export const routeMap = [
  {
    component: Landing,
    path: "/",
    exact: true,
  },
  {
    component: Pricing,
    path: "/pricing",
  },
];
