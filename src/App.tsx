import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import { Protected } from "./pages/Protected";
import RequireAuth from "./components/requireAuth";
import { PocketProvider } from "./components/context/pocketContext";
import DashboardPage from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <main className="flex align-items-center justify-content-center">
        <PocketProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<Login />} />
              <Route element={<RequireAuth />}>
                <Route path="/Protected" element={<Protected />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/" element={<DashboardPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </PocketProvider>
      </main>
    </>
  );
};

export default App;
