/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import "./Calendar.css";
import Header from "./Header";
import Footer from "./Footer";
import data from "../assets/data";
import DoorCard from "./DoorCard";

function Calendar() {
  return (
    <div className="calendar">
      <Header className="header" />
      <div className="door-container">
        {data?.map((door) => (
          <DoorCard door={door} key={door.id} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Calendar;
