import { useState } from "react";
import { Outlet } from "react-router-dom";
import "../style/sideBar.css";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const MainLayouts = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Toggle Sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="layout-container">
      <Header />

      <div className="layout-content" style={{ display: "flex" }}>
        <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            {isSidebarOpen ? (
              <FaArrowAltCircleLeft />
            ) : (
              <FaArrowAltCircleRight />
            )}
          </button>
          {isSidebarOpen && <Navbar />}
        </div>

        {/* Main Content */}
        <div style={{ width: "100%" }}>
          <Outlet /> {/* Render child pages */}
        </div>
      </div>
    </div>
  );
};

export default MainLayouts;
