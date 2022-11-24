import React from "react";
import "./Calendar.css";
import Header from "./Header";
import Footer from "./Footer";

function Calendar() {
  return (
    <div className="calendar">
      <Header className="header" />
      <div className="door-container">
        <div className="door"> </div>
        <div className="door"> </div>
        <div className="door"> </div>
        <div className="door"> </div>
        <div className="door"> </div>
        <div className="door"> </div>
        <div className="door"> </div>
        <div className="door"> </div>
        <div className="door"> </div>
        <div className="door"> </div>
        <div className="door"> </div>
        <div className="door"> </div>
        <div className="door"> </div>
        <div className="door"> </div>
        <div className="door"> </div>
        <div className="door"> </div>
        <div className="door"> </div>
        <div className="door"> </div>
        <div className="door"> </div>
        <div className="door"> </div>
        <div className="door"> </div>
        <div className="door"> </div>
        <div className="door"> </div>
        <div className="door"> </div>
        <div className="door"> </div>
      </div>
      <Footer />
    </div>
  );
}

export default Calendar;
