import React from "react";
import "./Testcal.css";
import data from "../assets/data";

function Testcal() {
  return (
    <div className="calendar">
      {data.map((item) => (
        <div>{item.id}</div>
      ))}
    </div>
  );
}

export default Testcal;
