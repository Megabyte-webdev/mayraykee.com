import { useState, lazy, Suspense } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
import { Tailwind, TRANSITIONS } from "./utils/datestyles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useRegistrationRoute from "./routes/useRegistrationRoute";
import useDashboardRoute from "./routes/useDashboardRoute";
import FallbackComponent from "./utils/FallbackComponent";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import useAdminDashboardRoute from "./routes/useAdminDashboardRoute";
import { NetworkStatusContextProvider } from "./context/NetworkStatusContext";
import { AuthenticationContextProvider } from "./context/AuthenticationContext";

const Login = lazy(() => import("./pages/Login"));
const ForgotPassword = lazy(() => import("../src/pages/ForgotPassword"));
const Landing = lazy(() => import("../src/pages/Landing"));
const LandingTwo = lazy(() => import("../src/pages/LandingTwo"));

function App() {
  const registrationRoute = useRegistrationRoute();

  const isAdmin = true;

  const adminDashboardRoute = useAdminDashboardRoute();
  const dashboardRoute = useDashboardRoute();

  return (
    <>
      <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
        <AuthenticationContextProvider>
          <NetworkStatusContextProvider>
            <Suspense fallback={<FallbackComponent />}>
              <Router>
                <Routes>
                  <Route path="/" element={<Landing />} />
                  <Route path="/landing_two" element={<LandingTwo />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/forgot_password" element={<ForgotPassword />} />

                  {registrationRoute}
                  {adminDashboardRoute}
                  {dashboardRoute}
                </Routes>
              </Router>
            </Suspense>
            <ToastContainer autoClose={2000} draggable />
          </NetworkStatusContextProvider>
        </AuthenticationContextProvider>
      </PrimeReactProvider>
    </>
  );
}

export default App;
