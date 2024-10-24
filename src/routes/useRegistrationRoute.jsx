import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";


const RegistrationLayout = lazy(() => import("../layout/RegistrationLayout"));
const Registration = lazy(() => import("../pages/Registration"));
const EmailVerification = lazy(() => import("../pages/EmailVerification"));


function useRegistrationRoute() {
  return (
    <>
        <Route path="/registration" element={<RegistrationLayout />}>
          <Route index element={<Registration />} />
          <Route path="/registration/email_verification" element={<EmailVerification/>} />
        </Route>
    </>
  );
}

export default useRegistrationRoute;
