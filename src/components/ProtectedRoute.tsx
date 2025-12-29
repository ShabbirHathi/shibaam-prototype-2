import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const location = useLocation();
  const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";

  if (!isAdminLoggedIn) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
