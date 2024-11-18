
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

const preselectedDates = [new Date(2024, 5, 15), new Date(2024, 5, 16)];

function Dashboard() {
  const [date, setDate] = useState(null);

  useEffect(() => {
    console.log("Date:", date);
  }, [date]);

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen p-4 md:p-2">
      <Helmet>
        <title>Mayrahkee - Africa | Dashboard</title>
      </Helmet>

      {/* Left Section */}
      <section className="w-full md:w-3/4 lg:w-2/3 flex-1 flex flex-col gap-6 md:pt-0">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <li className="h-48 w-full rounded-lg bg-red-100 overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-150">
            <img src={BoardMen} alt="Board Men" className="h-full w-full object-cover" />
          </li>
          <li className="h-48 w-full bg-white rounded-lg flex flex-col items-center justify-center overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-150">
            <img className="w-20 md:w-24" src={Computer} alt="" />
            <span className="text-green text-sm">Enter Class Room</span>
          </li>
          <li className="h-48 w-full bg-customBrown rounded-lg flex flex-col items-center justify-center overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-150">
            <img className="w-20 md:w-24" src={Dialog} alt="" />
            <span className="text-white text-sm">Forum</span>
          </li>
          <li className="h-48 w-full bg-green rounded-lg flex flex-col items-center justify-center overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-150">
            <img className="w-20 md:w-24" src={Calenderr} alt="" />
            <span className="text-white text-sm"> Course Schedule / Time Table </span>
          </li>
        </ul>

        <div className="flex flex-wrap gap-4 justify-between">
          <div className="flex-1 w-full md:w-3/4 lg:w-2/3 max-w-md min-h-72">
            <LineChart />
          </div>
          <div className="flex-1 w-full md:w-1/4 lg:w-1/3">
            <ProgressPieChart />
          </div>
        </div>
      </section>

      {/* Right Section */}
      <section className="flex-1 my-3 md:my-0 mx-3 w-full md:w-80 lg:w-64 flex flex-col gap-6">
        <div className="bg-gray-400 h-80 md:h-96 w-full rounded-lg">
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