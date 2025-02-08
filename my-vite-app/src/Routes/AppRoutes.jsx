import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "../Layouts/AuthLayout";
import MainLayouts from "../Layouts/MainLayouts";

// Lazy Load Pages
const HomePage = lazy(() => import("../Pages/Homepage"));
const LoginPage = lazy(() => import("../Pages/LoginPage"));
const Dashboard = lazy(() => import("../Pages/Dashboard"));
// const NotFound = lazy(() => import("../pages/NotFound"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<MainLayouts />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
