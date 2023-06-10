import { useLocation } from "react-router-dom";
import { Outlet, Navigate } from "react-router-dom";

import DataLoader from "../components/DataLoader";
import useUser from "../hooks/useUser";

const PrivateRoute = () => {
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
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ path: location.pathname }} />
  );
};

export default PrivateRoute;
