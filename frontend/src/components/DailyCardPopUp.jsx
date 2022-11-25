/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from "react";
import "./DailyCardPopUp.css";

function DailyCardPopUp(props) {
  const { window, handleClose } = props;
  return (
    <div className="popup-box" onClick={handleClose}>
      <div className="popup-card">
        <img src={window.gif} alt="It's Christmas!" className="card-gif" />
        <div className="popup-card-title"> It's Christmas!!! </div>
        <div className="card-question">{window.question}</div>
        <div className="card-answer">{window.answer}</div>
        <iframe
          width="400"
          height="80"
          scrolling="no"
          allow="autoplay"
          src={window.song}
        />
      </div>
    </div>
  );
}

export default DailyCardPopUp;
