import { FaRegUserCircle } from "react-icons/fa";
import "../style/sideBar.css";

const Header = () => {
  return (
    <div className="navbar-header">
      <h1 className="navbar-logo">Logo</h1>
      <FaRegUserCircle className="navbar-icon" />
    </div>
  );
};

export default Header;
