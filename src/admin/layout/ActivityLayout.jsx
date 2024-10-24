import { Outlet } from "react-router-dom";

function ActivityLayout() {
  return (
    <main className="w-full h-[90%] gap-[3%] flex flex-col px-[2%] py-[1%]">
      <div className="w-full">
        <button className="py-[5px] border-b-2 border-b-red-700 text-red-700 font-semibold text-sm  px-[10px]">Meeting</button>
      </div>

      <Outlet />
    </main>
  );
}

export default ActivityLayout;
