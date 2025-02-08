import "../style/LoginPage.css";
import { FaUser, FaLock } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="login-Main-container">
      <div className="login-container">
        <div className="login-sub-container">
          <p className="login-text">Login</p>
          <form className="form-container">
            <div className="user-name-container">
              <FaUser className="icon userIcon" style={{ color: "#FFFFFF" }} />
              <input
                className="user-name-text"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="user-name-container">
              <FaLock className="icon userIcon" style={{ color: "#FFFFFF" }} />
              <input
                className="user-name-text"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="buttons-container">
              <button className="signup-button">SIGNUP</button>
              <button
                className="login-button"
                style={{ backgroundColor: "#FFCC00", color: "#262626" }}
              >
                LOGIN
              </button>
            </div>
            <p className="text-link">
              or connect with
              <a
                href="https://www.facebook.com"
                target="_blank"
                style={{
                  color: "#FFCC00",
                  paddingLeft: "10px",
                  fontFamily: "Segoe UI",
                }}
              >
                Facebook
              </a>
            </p>
          </form>
        </div>
      </div>
      <div className="image-container"></div>
    </div>
  );
};

export default LoginPage;
