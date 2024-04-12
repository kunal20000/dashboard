/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { flattenRoutes } from "@/helpers";

const NotFound = lazy(() => import("../app/not-found"));

const AdminWallet = lazy(() => import("../app/admin/wallet/page"));

const adminRoutes = [
  {
    path: "/",
    name: "Wallet",
    element: <AdminWallet />,
  },
  {
    path: "*",
    name: "Page Not Found",
    element: <NotFound />,
  },
];

const allAdminRoutes = [...adminRoutes];

const allAdminFlattedRoutes = flattenRoutes([...allAdminRoutes]);

export { allAdminFlattedRoutes };
