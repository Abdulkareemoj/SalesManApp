import { Navigate, Route } from "react-router-dom";
import { useAuth } from "./authContext";

export function PrivateRoute({ children, ...rest }: any) {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? (
          children
        ) : (
          <Navigate to="/login" state={{ from: rest.location }} replace />
        )
      }
    />
  );
}
