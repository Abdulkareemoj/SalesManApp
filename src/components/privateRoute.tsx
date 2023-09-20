import { Redirect, Route } from "react-router-dom";
import { useAuth } from "./authContext";

export function PrivateRoute({ children, ...rest }: any) {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
