import { usePocket } from "./context/pocketContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
  const { user } = usePocket();
  const location = useLocation();

  if (!user) {
    return (
      <Navigate to={"/login"} replace state={{ path: location.pathname }} />
    );
  }
  return <Outlet />;
};
export default RequireAuth;
