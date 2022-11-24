import React from "react";
import "./Calendar.css";
import Header from "./Header";
import Footer from "./Footer";

function Calendar() {
  return (
    <div className="calendar">
      <Header className="header" />
      <div className="door-container">
        <div>
          <div className="door" />
          <div className="backdoor">
            <span>12</span>
          </div>
        </div>
        <div>
          <div className="door" />
          <div className="backdoor" />
        </div>
        <div>
          <div className="door" />
          <div className="backdoor" />
        </div>
        <div>
          <div className="door" />
          <div className="backdoor" />
        </div>
        <div>
          <div className="door" />
          <div className="backdoor" />
        </div>
        <div>
          <div className="door" />
          <div className="backdoor" />
        </div>
        <div>
          <div className="door" />
          <div className="backdoor" />
        </div>
        <div>
          <div className="door" />
          <div className="backdoor" />
        </div>
        <div>
          <div className="door" />
          <div className="backdoor" />
        </div>{" "}
        <div>
          <div className="door" />
          <div className="backdoor" />
        </div>{" "}
        <div>
          <div className="door" />
          <div className="backdoor" />
        </div>{" "}
        <div>
          <div className="door" />
          <div className="backdoor" />
        </div>{" "}
        <div>
          <div className="door" />
          <div className="backdoor" />
        </div>{" "}
        <div>
          <div className="door" />
          <div className="backdoor" />
        </div>{" "}
        <div>
          <div className="door" />
          <div className="backdoor" />
        </div>{" "}
        <div>
          <div className="door" />
          <div className="backdoor" />
        </div>{" "}
        <div>
          <div className="door" />
          <div className="backdoor" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Calendar;
