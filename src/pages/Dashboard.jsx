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
<<<<<<< HEAD
import { Helmet } from "react-helmet";

const preselectedDates = [new Date(2024, 5, 15), new Date(2024, 5, 16)];

function Dashboard() {
  const [date, setDate] = useState(null);
=======
import {Helmet} from 'react-helmet'

const preselectedDates = [
  new Date(2024, 5, 15), // Pre-selected date (December 25, 2023)
  new Date(2024, 5, 16), // New Year's Eve
];

function Dashboard() {
  const [date, setDate] = useState(null);
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);
>>>>>>> main

  useEffect(() => {
    console.log("Date:", date);
  }, [date]);
<<<<<<< HEAD

  return (
    <div className="flex flex-wrap gap-5 w-full min-h-full px-4 md:px-[2%] pt-[1%]">
  <Helmet>
    <title>Mayrahkee - Africa | Dashboard</title>
  </Helmet>

  {/* Left Section */}
  <section className="flex-[2] w-full md:w-2/3 flex flex-col gap-6 pt-[3%]">
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <li className="h-[190px] w-full rounded-[10px] bg-red-100 overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-150">
        <img
          src={BoardMen}
          alt="Board Men"
          className="h-full w-full object-cover"
        />
      </li>

      <li className="h-[190px] w-full bg-white rounded-[10px] flex flex-col items-center justify-center overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-150">
        <img className="w-[80px] md:w-[100px]" src={Computer} alt="" />
        <span className="text-green text-sm">Enter Class Room</span>
      </li>

      <li className="h-[190px] w-full bg-customBrown rounded-[10px] flex flex-col items-center justify-center overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-150">
        <img className="w-[80px] md:w-[100px]" src={Dialog} alt="" />
        <span className="text-white text-sm">Forum</span>
      </li>

      <li className="h-[190px] w-full bg-green rounded-[10px] flex flex-col items-center justify-center overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-150">
        <img className="w-[80px] md:w-[90px]" src={Calenderr} alt="" />
        <span className="text-white text-sm">
          Course Schedule / Time Table
        </span>
      </li>
    </ul>

    <div className="flex flex-wrap gap-4 justify-center items-end">
      <div className="flex-1 w-full md:w-[70%] max-w-[400px] min-h-[300px]">
        <LineChart />
      </div>
      <div className="flex-1 w-full md:w-[30%]">
        <ProgressPieChart />
      </div>
    </div>
  </section>

  {/* Right Section */}
  <section className="flex-[1] w-full md:w-1/3 flex flex-col gap-6">
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

=======
  return (
    <div className="flex w-full h-full px-[2%] overflow-x-auto pt-[1%]">
         <Helmet>
          <title>Mayrahkee - Africa | Dashboard</title>
          </Helmet>
          
      <section className="w-[70%] h-full flex flex-col  gap-[5%] pt-[3%]">
        <ul className="h-[50%]  w-full grid grid-cols-2 gap-[10px] ">
        <div className="h-[190px] w-[350px] rounded-[10px] bg-red-100 overflow-hidden cursor-pointer hover:scale-105 duration-150">
        <img
          src={BoardMen}
          alt="Board Men" // Descriptive alt text for accessibility
          className="h-full w-full object-cover"
        />
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
        <div className="flex w-full justify-between pr-[8%] h-[100px]">
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
>>>>>>> main
  );
}

export default Dashboard;
