import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import AuthenticationPage from "./auth";
import DashboardPage from "./dashboard";
import { PrivateRoute } from "./components/privateRoute";
import { AuthProvider } from "./components/authContext";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary fallback={{ fallback: <div>Something went wrong.</div> }}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={""} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DashboardPage />
                </PrivateRoute>
              }
            />
            <Route path="/auth" element={<AuthenticationPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}
