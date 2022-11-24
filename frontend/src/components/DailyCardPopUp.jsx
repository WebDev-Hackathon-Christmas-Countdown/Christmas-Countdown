/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from "react";
import data from "../assets/data.json";
import "./DailyCardPopUp.css";

function DailyCardPopUp(props) {
  const jokeNum = Math.floor(Math.random() * (24 - 0 + 1) + 0);
  return (
    <>
      {/* {data.map((datas) => ( */}
      <div className="popup-box">
        <div className="popup-card">
          <button className="close-btn" onClick={props.handleClose}>
            x
          </button>
          <img
            src={data[jokeNum].gif}
            alt="It's Christmas!"
            className="card-gif"
          />
          <div className="popup-card-title"> It's Christmas!!! </div>
          <div className="card-question">{data[jokeNum].question}</div>
          <div className="card-answer">{data[jokeNum].answer}</div>
          <iframe
            title="title"
            width="400"
            height="70"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={`${data[jokeNum].song}`}
          />
        </div>
        {/* ))} */}
      </div>
    </>
  );
}

export default DailyCardPopUp;
