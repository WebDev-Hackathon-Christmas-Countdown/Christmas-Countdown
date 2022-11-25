/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
import React from "react";
import "./CalendarWindows.scss";
import data from "../assets/data";
import WindowCard from "./WindowCard";
import Footer from "./Footer";

function CalendarWindows() {
  const nbrSnowflake = 3000;
  const dateDay = new Date().getDate();

  return (
    <div className="calendar_windows">
      {[...Array(nbrSnowflake)].map((e, i) => (
        <div className="snowflake" key={i} />
      ))}
      {data
        .slice(0, dateDay)
        .map((window) =>
          window.id % 3 === 0 ? (
            <WindowCard
              window={window}
              grid={`${(window.id / 3) * 2} / 6 / ${
                (window.id / 3) * 2 + 1
              } / 7`}
              key={window.id}
            />
          ) : (window.id + 1) % 3 === 0 ? (
            <WindowCard
              window={window}
              grid={`${((window.id + 1) / 3) * 2} / 4 / ${
                ((window.id + 1) / 3) * 2 + 1
              } / 5`}
              key={window.id}
            />
          ) : (
            <WindowCard
              window={window}
              grid={`${((window.id + 2) / 3) * 2} / 2 / ${
                ((window.id + 2) / 3) * 2 + 1
              } / 3`}
              key={window.id}
            />
          )
        )}
      <Footer />
    </div>
  );
}

export default CalendarWindows;