import { useState, lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import useRegistrationRoute from "./routes/useRegistrationRoute";

function App() {
  const registrationRoute = useRegistrationRoute();

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />

            {registrationRoute}
          </Routes>
        </Router>
        <ToastContainer
         
         autoClose={2000}
         draggable
        />
      </Suspense>
    </>
  );
}

export default App;
