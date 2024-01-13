// Layout.js
import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidemenu from "./Sidemenu";
import ToggleArrow from "./ToggleArrow"; // Assuming you've created the ToggleArrow component
import "./Layout.css";

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="main-content">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className={`container ${isSidebarOpen ? "sidebar-open" : ""}`}>
        {children}
        <ToggleArrow onClick={toggleSidebar} />
        <Sidemenu isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
};

export default Layout;
