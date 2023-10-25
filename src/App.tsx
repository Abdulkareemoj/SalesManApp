import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import AuthRoute from "./components/authRoute";
import DashboardPage from "./pages/dashboard";

const App = () => {
  return (
    <>
      <main className="flex align-items-center justify-content-center">
        <Routes>
          <Route element={<AuthRoute />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
