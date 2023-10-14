// import {
//   BrowserRouter as Router,
//   Route,
//   Navigate,
//   Routes,
// } from "react-router-dom";
// import AuthenticationPage from "./auth";
// import DashboardPage from "./dashboard";
// import { PrivateRoute } from "./components/privateRoute";
// import { AuthProvider } from "./authContext";
// import ErrorBoundary from "./components/ErrorBoundary";

// export default function App() {
//   return (
//     <ErrorBoundary fallback={{ fallback: <div>Something went wrong.</div> }}>
//       <AuthProvider>
//         <Router>
//           <Routes>
//             <Route path="/" element={""} />
//             <Route
//               path="/dashboard"
//               element={
//                 <PrivateRoute>
//                   <DashboardPage />
//                 </PrivateRoute>
//               }
//             />
//             <Route path="/auth" element={<AuthenticationPage />} />
//           </Routes>
//         </Router>
//       </AuthProvider>
//     </ErrorBoundary>
//   );
// }

import { Route, Routes } from "react-router-dom";
// import Register from "./pages/Register";
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
