import { useState, lazy, Suspense } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Tailwind, TRANSITIONS } from "./utils/datestyles";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useRegistrationRoute from "./routes/useRegistrationRoute";
import useDashboardRoute from "./routes/useDashboardRoute";
import FallbackComponent from "./utils/FallbackComponent";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

const ForgotPassword = lazy(() => import("../src/pages/ForgotPassword"));

function App() {
  const registrationRoute = useRegistrationRoute();
  const dashboardRoute = useDashboardRoute();

  return (
    <>
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>

        <Suspense fallback={<FallbackComponent />}>
          <Router>
            <Routes>
              
              <Route path="/login" element={<Login />} />
              <Route path="/forgot_password" element={<ForgotPassword />} />

              {registrationRoute}
              {dashboardRoute}
            </Routes>
          </Router>
          <ToastContainer autoClose={2000} draggable />
        </Suspense>
    </PrimeReactProvider>
    </>
  );
}

export default App;
