/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import DailyCardPopUp from "../components/DailyCardPopUp";
import Footer from "../components/Footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="App-header">
      <button onClick={toggleOpen}> Click </button>
      {isOpen && (
        <DailyCardPopUp
          handleClose={toggleOpen}
          // props for the card from the data should go here in a propr=something
        />
      )}
      <Footer />
    </header>
  );
}
