import React, { useEffect, useState } from "react";
import BoardMen from "../assets/jpgs/boardroom.jpg";
import Computer from "../assets/pngs/computer.png";
import Dialog from "../assets/pngs/dialog.png";
import Calenderr from "../assets/pngs/calender.png";
import { Calendar } from "primereact/calendar";
import HomeWork from "../components/dashboard/HomeWork";
import Upcoming from "../components/dashboard/Upcoming";
import LineChart from "../components/dashboard/chart/LineChart";
import ProgressPieChart from "../components/dashboard/chart/ProgressPieChart";
import { Helmet } from "react-helmet";

const preselectedDates = [
  new Date(2024, 5, 15),
  new Date(2024, 5, 16),
];

function Dashboard() {
  const [date, setDate] = useState(null);
  const [highlightedDays, setHighlightedDays] = useState([1, 2, 15]);

  useEffect(() => {
    console.log("Date:", date);
  }, [date]);

  return (
    <div className="flex flex-col gap-4 md:gap-0 md:flex-row w-full h-full px-4 md:px-[2%] overflow-x-auto pt-[1%]">
      <Helmet>
        <title>Mayrahkee - Africa | Dashboard</title>
      </Helmet>

      <section className="w-full md:w-[70%] flex flex-col gap-6 md:gap-[5%] pt-[3%]">
        <ul className="grid gap-4 md:grid-cols-2">
          <div className="h-[190px] w-[200px] md:w-[350px] rounded-[10px] bg-red-100 overflow-hidden cursor-pointer hover:scale-105 duration-150">
            <img
              src={BoardMen}
              alt="Board Men"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="w-[200px] md:w-[350px] cursor-pointer group hover:scale-105 duration-150 flex flex-col gap-2 justify-center items-center rounded-[10px] overflow-hidden h-[190px] bg-cover bg-white">
            <img className="w-[80px] md:w-[100px]" src={Computer} alt="" />
            <span className="text-green text-sm">Enter Class Room</span>
          </div>

          <div className="w-[200px] md:w-[350px] cursor-pointer hover:scale-105 duration-150 flex flex-col gap-2 justify-center items-center rounded-[10px] overflow-hidden h-[190px] bg-cover bg-customBrown">
            <img className="w-[80px] md:w-[100px]" src={Dialog} alt="" />
            <span className="text-white text-sm">Forum</span>
          </div>

          <div className="w-[200px] md:w-[350px] cursor-pointer hover:scale-105 duration-150 flex flex-col gap-2 justify-center items-center rounded-[10px] overflow-hidden h-[190px] bg-cover bg-green">
            <img className="w-[80px] md:w-[90px]" src={Calenderr} alt="" />
            <span className="text-white text-sm">
              Course Schedule / Time Table
            </span>
          </div>
        </ul>

        <div className="flex flex-wrap w-full justify-between pr-0 md:pr-[8%] min-h-[100px] gap-4">
          <LineChart />
          <ProgressPieChart />
        </div>
      </section>

      <section className="w-full md:w-[30%] flex flex-col gap-6">
        <div className="bg-gray-400 h-[300px] md:h-[55%] w-full rounded-[10px]">
          <Calendar
            value={preselectedDates}
            selectionMode="multiple"
            showWeek
            className="w-full text-gray-700 text-sm h-full"
            inline
          />
        </div>
        <HomeWork />
        <Upcoming />
      </section>
    </div>
  );
}

export default Dashboard;