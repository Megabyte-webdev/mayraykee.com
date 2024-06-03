import React, { useState } from "react";
import Selector from "../Selector";
import UploadIcon  from '../../assets/pngs/upload-icon.png'
import { getImageURL } from "../../utils/DashboardUtilMethods";
import { professionsOption, titlesOption } from "../../utils/constants";

function EditDetails() {
  const [selected, setSelected] = useState({ id: 1, name: "One" });
  const [title, setTitle] = useState(titlesOption[0]);
  const [profession, setProfession] = useState(professionsOption[0]);
  const [photoUrl, setPhotoUrl] = useState(null);
  const data = [
    { id: 1, name: "One" },
    { id: 2, name: "Two" },
  ];

  return (
    <div className="w-full h-full mt-[10px] flex flex-col  gap-[5px] ">
      <h3 className="font-semibold text-[16px]">Account Information</h3>
      <p className="text-small text-gray-600">
        Update your account information
      </p>

      <div className="flex  mt-[5px] justify-between gap-[10px]">

        <form className="flex w-[50%] flex-col gap-[15px] items-center">
        <h4 className="font-semibold place-self-start text-[14px]">Personal Information</h4>
        
        <div className="flex flex-col w-full gap-[5px]">
          <label className="font-semibold text-gray-600 text-sm">
                Title
              </label>
            <Selector
              selected={title}
              setSelected={setTitle}
              data={titlesOption}
            />
          </div>
          {/* First Section */}
          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col w-[45%] gap-[5px]">
              <label className="font-semibold text-gray-600 text-sm">
                First Name
              </label>
              <input
                type="text"
                className=" w-full py-[5px] rounded-[5px] focus:outline-none pl-[5%] text-sm"
                placeholder="Alexa"
              />
            </div>
            <div className="flex flex-col w-[45%] gap-[5px]">
              <label className="font-semibold text-gray-600 text-sm">
                Last Name
              </label>
              <input
                type="text"
                className=" w-full py-[5px] rounded-[5px] focus:outline-none pl-[5%] text-sm"
                placeholder="Andriana"
              />
            </div>
          </div>

        

          {/* Second Section */}
          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col w-[45%] gap-[5px]">
              <label className="font-semibold text-gray-600 text-sm">
                Date of Birth
              </label>
              <input
                type="email"
                className=" w-full py-[5px] rounded-[5px] focus:outline-none pl-[5%] text-sm"
                placeholder="alexaandriana@example.com"
              />
            </div>
            <div className="flex flex-col w-[45%] gap-[5px]">
              <label className="font-semibold text-gray-600 text-sm">
                Phone No
              </label>
              <input
                type="tel"
                className=" w-full py-[5px] rounded-[5px] focus:outline-none pl-[5%] text-sm"
                placeholder="070454589298"
              />
            </div>
          </div>
      
          <div className="flex flex-col w-full gap-[5px]">
          <label className="font-semibold text-gray-600 text-sm">
                Profession
              </label>
            <Selector
              selected={profession}
              setSelected={setProfession}
              data={professionsOption}
            />
          </div>

          <div className="flex flex-col w-full gap-[5px]">
          <label className="font-semibold text-gray-600 text-sm">
                Address
              </label>
              <input
                type="text"
                className=" w-full py-[5px] rounded-[5px] focus:outline-none pl-[3%] text-sm"
                placeholder="Santi Nero, Stree II. Pishna City"
              />
          </div>

          <div className="flex flex-col w-full gap-[5px]">
          <label className="font-semibold text-gray-600 text-sm">
                LinkedIn
              </label>
              <input
                type="text"
                className=" w-full py-[5px] rounded-[5px] focus:outline-none pl-[3%] text-sm"
                placeholder="https://linkedIn/example.user"
              />
          </div>


          <div className="flex flex-col w-full gap-[5px]">
          <label className="font-semibold text-gray-600 text-sm">
                Country
              </label>
            <Selector
              selected={selected}
              setSelected={setSelected}
              data={data}
            />
          </div>

          <div className="flex flex-col w-full gap-[5px]">
          <label className="font-semibold text-gray-600 text-sm">
                State
              </label>
            <Selector
              selected={selected}
              setSelected={setSelected}
              data={data}
            />
          </div>

          <div className="flex flex-col w-full gap-[5px]">
          <label className="font-semibold text-gray-600 text-sm">
                Industry
              </label>
            <Selector
              selected={selected}
              setSelected={setSelected}
              data={data}
            />
          </div>

          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col w-[45%] gap-[5px]">
              <label className="font-semibold text-gray-600 text-sm">
                New Password
              </label>
              <input
                type="password"
                className=" w-full py-[5px] rounded-[5px] focus:outline-none pl-[5%] text-sm"
                placeholder="Alexa"
              />
            </div>
            <div className="flex flex-col w-[45%] gap-[5px]">
              <label className="font-semibold text-gray-600 text-sm">
                Confirm Password
              </label>
              <input
                type="password"
                className=" w-full py-[5px] rounded-[5px] focus:outline-none pl-[5%] text-sm"
                placeholder="Andriana"
              />
            </div>
          </div>

          <button className="py-[5px] place-self-start text-sm hover:scale-105 duration-150 bg-green px-[15px] text-white font-semibold rounded-[5px]">Submit</button>
        </form>
        
        <div className="w-[45%] flex gap-[20px]">

          <div className="w-[20%] rounded-[5px] flex border-gray-400  justify-center items-center border-2 h-[70px]">
              <img src={photoUrl? photoUrl : UploadIcon} className={photoUrl ? "" : "h-[20px]"} />
          </div> 
         
          <div className="w-[70%] flex flex-col gap-[8px]">
            <input onChange={(e) => getImageURL(e, setPhotoUrl)} accept=".jpg, .jpeg, .png" type="file" className="hidden" id="profile-image"/>
            <label htmlFor="profile-image" className="w-[40%] rounded-full hover:bg-white hover:text-black border-gray-400 font-semibold text-center text-small py-[5px] text-gray-800 border">Upload Image</label>
             <p className="text-small text-gray-400">.png, jpg, file up to 8MB Recommended size is 256 x 256px</p>
          </div>

        </div>
        
      </div>
    </div>
  );
}

export default EditDetails;
