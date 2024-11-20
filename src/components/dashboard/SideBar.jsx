import React, { memo } from "react";
import MainLogo from "../../assets/svgs/main-logo.svg";
import InviteComponent from "./InviteComponent";
<<<<<<< HEAD
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

function SideBar({ children, menu, setMenu }) {


  return (
    <>

      <section className={`fixed top-0 bottom-0 z-10 ${menu ? 'left-0' : 'left-[-100%]'} min-w-[200px] h-full bg-white flex justify-start flex-col items-center gap-[5%]  py-[0.8%]`}>
        <div
          onClick={() => {
            setMenu(!menu);
          }}
          className="self-end cursor-pointer flex items-center mt-2 gap-2 transition-all ease-in-out duration-300"
        >
          {!menu ? <FaBars size={24} /> : <FaTimes size={24} />}
          <img className="w-40" src={MainLogo} />

        </div>
        
        <ul className="flex flex-col w-full pl-[2%] items-center gap-[5%] h-[80%]">{children}</ul>

        <InviteComponent />
      </section>
      <section className={`hidden min-w-[200px] relative h-full md:flex justify-start flex-col items-center gap-[5%]  py-[0.8%]`}>
        <img className="w-40" src={MainLogo} />

        <ul className="flex flex-col w-full pl-[2%] items-center gap-[5%] h-[80%]">{children}</ul>

        <InviteComponent />
      </section>

    </>
=======

function SideBar({children}) {


  return (
    <section className="w-[16%] relative h-full flex justify-start flex-col items-center gap-[5%]  py-[0.8%]">
      <img className="w-[90%] " src={MainLogo} />

      <ul className="flex flex-col w-full pl-[2%] items-center gap-[5%] h-[80%]">{children}</ul>

      <InviteComponent/>
    </section>
>>>>>>> main
  );
}

export default memo(SideBar);
