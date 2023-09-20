import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AuthenticationPage from "./Auth";
import DashboardPage from "./Dashboard";
import { PrivateRoute } from "./components/privateRoute";
import { AuthProvider } from "./components/authContext";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login">
            <AuthenticationPage />
          </Route>
          {/* Add additional routes here */}
          <PrivateRoute path="/dashboard">
            <DashboardPage />
          </PrivateRoute>
        </Switch>
      </Router>
    </AuthProvider>
  );
}
