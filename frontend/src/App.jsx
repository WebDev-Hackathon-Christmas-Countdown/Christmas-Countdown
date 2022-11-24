/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calendar from "./components/Calendar";
import Testcal from "./components/Testcal";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/testcal" element={<Testcal />} />
      </Routes>
    </div>
  );
}

export default App;
