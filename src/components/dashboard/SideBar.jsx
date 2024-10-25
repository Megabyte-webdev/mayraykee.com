import React, { memo } from "react";
import MainLogo from "../../assets/svgs/main-logo.svg";
import InviteComponent from "./InviteComponent";

function SideBar({children}) {


  return (
<>
    <section className="hidden w-[16%] relative h-full md:flex justify-start flex-col items-center gap-[5%]  py-[0.8%]">
      <img className="w-[90%] " src={MainLogo} />

      <ul className="flex flex-col w-full pl-[2%] items-center gap-[5%] h-[80%]">{children}</ul>

      <InviteComponent/>
    </section>

</>
  );
}

export default memo(SideBar);
