import React, { useEffect, useState } from "react";
import BoardMen from "../assets/pngs/men-in-board.png";
import Computer from "../assets/pngs/computer.png";
import Dialog from "../assets/pngs/dialog.png";
import Calenderr from "../assets/pngs/calender.png";
import Badge from "@mui/material/Badge";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import { Calendar } from "primereact/calendar";
import HomeWork from "../components/dashboard/HomeWork";
import Upcoming from "../components/dashboard/Upcoming";
import LineChart from "../components/dashboard/chart/LineChart";
import ProgressPieChart from "../components/dashboard/chart/ProgressPieChart";

const preselectedDates = [
  new Date(2024, 5, 15), // Pre-selected date (December 25, 2023)
  new Date(2024, 5, 16), // New Year's Eve
];

function Dashboard() {
  const [date, setDate] = useState(null);
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);

  useEffect(() => {
    console.log("Date:", date);
  }, [date]);
  return (
    <div className="flex w-full h-full px-[2%] overflow-x-auto pt-[1%]">
      <section className="w-[70%] h-full flex flex-col  gap-[5%] pt-[3%]">
        <ul className="h-[50%]  w-full grid grid-cols-2 gap-[10px] ">
          <div
            className={`w-[350px] rounded-[10px] cursor-pointer hover:scale-105 bg-card-background bg-[length:120%_125%] bg-center  bg-red-100 duration-150 overflow-hidden h-[190px] `}
          >
            {/* <img className="object-cover w-full" src={BoardMen} /> */}
          </div>

          <div
            className={`w-[350px] cursor-pointer group hover:scale-105 duration-150 flex flex-col gap-[10px] justify-center items-center rounded-[10px] overflow-hidden h-[190px] bg-cover bg-white`}
          >
            <img className=" w-[100px]" src={Computer} />
            <span className="text-green text-sm  ">Enter Class Room</span>
          </div>

          <div
            className={`w-[350px] cursor-pointer hover:scale-105 duration-150 flex flex-col gap-[10px] justify-center items-center rounded-[10px] overflow-hidden h-[190px] bg-cover bg-customBrown`}
          >
            <img className=" w-[100px]" src={Dialog} />
            <span className="text-white text-sm">Forum</span>
          </div>
          <div
            className={`w-[350px] cursor-pointer hover:scale-105 duration-150 flex flex-col gap-[10px] justify-center items-center rounded-[10px] overflow-hidden h-[190px] bg-cover bg-green`}
          >
            <img className=" w-[90px]" src={Calenderr} />
            <span className="text-white text-sm">
              Course Schedule / Time Table{" "}
            </span>
          </div>
        </ul>
        <div className="flex w-full flex justify-between pr-[8%] h-[100px]">
        <LineChart/>
       <ProgressPieChart/>
        </div>
      </section>

      <section className="w-[30%] h-full gap-[5%] flex flex-col">
        <div className="bg-gray-400 h-[55%] w-full rounded-[10px]">
          <Calendar
            value={preselectedDates}
            selectionMode="multiple"
            showWeek
            className="w-full text-gray-700 text-sm h-full"
            inline
          />
        </div>
        <HomeWork />
        <Upcoming/>
      </section>
    </div>
  );
}

export default Dashboard;
