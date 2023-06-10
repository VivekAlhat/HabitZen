import { Navigate, Outlet, useLocation } from "react-router-dom";

import DataLoader from "../components/DataLoader";
import useUser from "../hooks/useUser";

const AuthRedirect = () => {
  const { user, isUserLoading } = useUser();
  const location = useLocation();

  if (isUserLoading) {
    return (
      <div className="grid place-items-center h-screen">
        <DataLoader loadingText={null} />
      </div>
    );
  }

  return user ? (
    <Navigate to="/dashboard" replace state={{ path: location.pathname }} />
  ) : (
    <Outlet />
  );
};

export default AuthRedirect;
