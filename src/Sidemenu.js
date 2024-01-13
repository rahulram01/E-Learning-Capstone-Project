// Sidemenu.js
import React from "react";
import "./Sidemenu.css";
import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import PlayLessonSharpIcon from "@mui/icons-material/PlayLessonSharp";
import LiveTvSharpIcon from "@mui/icons-material/LiveTvSharp";
import QuizSharpIcon from "@mui/icons-material/QuizSharp";
import QueryStatsSharpIcon from "@mui/icons-material/QueryStatsSharp";
import ToggleArrow from "./ToggleArrow"; // Import the ToggleArrow component

const Sidemenu = ({ isOpen, toggleSidebar }) => {
  const handleSidebarClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={`side ${isOpen ? "open" : ""}`} onClick={toggleSidebar}>
      <div className="content" onClick={handleSidebarClick}>
        <ul>
          <li>
            <DashboardSharpIcon />
            Dashboard
          </li>
          <li>
            <PlayLessonSharpIcon />
            Courses
          </li>
          <li>
            <LiveTvSharpIcon />
            Live Session
          </li>
          <li>
            <QuizSharpIcon />
            Tests
          </li>
          <li>
            <QueryStatsSharpIcon />
            Performance
          </li>
        </ul>
      </div>
      {!isOpen && <ToggleArrow onClick={toggleSidebar} />}{" "}
      {/* Render ToggleArrow when closing */}
    </div>
  );
};

export default Sidemenu;
