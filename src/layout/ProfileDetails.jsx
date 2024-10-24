import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { registration_steps_keys } from "../utils/constants";
import EditDetails from "../components/profile-page/EditDetails";
import {Helmet} from 'react-helmet'


function ProfileDetails() {
  return (
    <section className="flex flex-col w-full h-full mb-[10px] py-[1%] overflow-y-scroll px-[2%] items-end ">
      <Helmet>
        <title>Mayrahkee - Africa | Profile</title>
      </Helmet>
      <button
        className={`before:content-link before:h-full before:flex before:items-center before:justify-center w-fit border gap-[3px] border-lime-600 flex items-center py-[3px] rounded-[10px] px-[8px]`}
      >Edit</button>

      <div className="w-full flex flex-col gap-[5px] border-b">
        <h2 className="font-bold text-[20px]">Welcome Alexa A.</h2>
        <p className="text-small">Tue, 07 June 2022</p>
      </div>

      <EditDetails/>
    </section>
  );
}

export default ProfileDetails;
