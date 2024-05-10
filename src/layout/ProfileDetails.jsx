import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { registration_steps_keys } from "../utils/constants";

function ProfileDetails() {
  return (
    <section className="flex flex-col ">
      <button className={`before:content-link`}>

        Edit
        </button>
    </section>
  );
}

export default ProfileDetails;
