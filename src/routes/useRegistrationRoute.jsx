import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import EmailVerification from "../pages/EmailVerification";
import ProfileDetails from "../pages/ProfileDetails";

const RegistrationLayout = lazy(() => import("../layout/RegistrationLayout"));
const Registration = lazy(() => import("../pages/Registration"));

function useRegistrationRoute() {
  return (
    <>
        <Route path="/registration" element={<RegistrationLayout />}>
          <Route index element={<Registration />} />
          <Route path="/registration/email_verification" element={<EmailVerification/>} />
          <Route path="/registration/profile_details" element={<ProfileDetails/>} />
        </Route>
    </>
  );
}

export default useRegistrationRoute;
