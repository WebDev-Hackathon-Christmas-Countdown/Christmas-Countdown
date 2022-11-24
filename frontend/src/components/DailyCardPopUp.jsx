/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from "react";
import "./DailyCardPopUp.css";

function DailyCardPopUp(props) {
  const { door, handleClose } = props;
  return (
    <div className="popup-box">
      <div className="popup-card">
        <button className="close-btn" onClick={handleClose}>
          x
        </button>
        <img src={door.gif} alt="It's Christmas!" className="card-gif" />
        <div className="popup-card-title"> It's Christmas!!! </div>
        <div className="card-question">{door.question}</div>
        <div className="card-answer">{door.answer}</div>
        <iframe
          title="title"
          width="400"
          height="70"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={`${door.song}`}
        />
      </div>
    </div>
  );
}

export default DailyCardPopUp;
