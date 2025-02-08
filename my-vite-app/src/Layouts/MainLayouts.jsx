import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

const MainLayouts = () => {
  return (
    <div className="app-container">
      {/* <Sidebar /> */}
      <div className="main-content">
        <Header />
        <Outlet /> {/* Renders child route components */}
      </div>
    </div>
  );
};

export default MainLayouts;
