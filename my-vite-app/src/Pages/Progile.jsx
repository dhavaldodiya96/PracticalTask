import "../style/profile.css";
import { FaReact } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import MapComponent from "../Components/MapComponent";

const Progile = () => {
  return (
    <div className="contact-details-container">
      <div className="loram-container">
        <div className="lorem-first-box">
          <div className="lorem-icon-box">
            <p className="loram-text">Loram Iporam</p>
            <FaReact className="react-icon" />
          </div>
          <div className="lorem-icon-box">
            <p style={{ color: "blue", fontSize: "28px" }}>5</p>
            <FaArrowRight style={{ color: "#6B6B6B", fontSize: "28px" }} />
          </div>
        </div>
        <div className="lorem-first-box">
          <div className="lorem-icon-box">
            <p className="loram-text">Loram Iporam</p>
            <FaReact className="react-icon" />
          </div>
          <div className="lorem-icon-box">
            <p style={{ color: "#FFCC00", fontSize: "28px" }}>5</p>
            <FaArrowRight style={{ color: "#6B6B6B", fontSize: "28px" }} />
          </div>
        </div>
        <div className="lorem-first-box">
          <div className="lorem-icon-box">
            <p className="loram-text">Loram Iporam</p>
            <FaReact className="react-icon" />
          </div>
          <div className="lorem-icon-box">
            <p style={{ color: "#7E7AEC", fontSize: "28px" }}>
              <span style={{ color: "#FFFFFF", gap: "20px" }}>8</span>/5
            </p>
            <FaArrowRight style={{ color: "#6B6B6B", fontSize: "28px" }} />
          </div>
        </div>
        <div className="lorem-first-box">
          <div className="lorem-icon-box">
            <p className="loram-text">Loram Iporam</p>
            <FaReact className="react-icon" />
          </div>
          <div className="lorem-icon-box">
            <p style={{ color: "#25BCE2", fontSize: "28px" }}>5</p>
            <FaArrowRight className="react-icon" />
          </div>
        </div>
      </div>

      <div className="contact-map-container">
        <div className="contact-container">
          <div className="form-country-icon">
            <p style={{ color: "#FFFFFF", fontPalette: "22px" }}>
              Form Details
            </p>
            <p style={{ color: "#FFFFFF" }}>
              Country:
              <span style={{ color: "#FFCC00" }}>
                United State <IoIosArrowDown />
              </span>
            </p>
          </div>

          <div className="form-content">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone number</label>
              <input
                type="text"
                id="phone"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="full-name-group">
              <label htmlFor="name">Full name</label>
              <input type="text" id="name" placeholder="Enter your full name" />
            </div>
            <div className="full-name-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                placeholder="Enter your address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="postcode">Post code</label>
              <input
                type="text"
                id="postcode"
                placeholder="Enter your postcode"
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" id="city" placeholder="Enter your city" />
            </div>
            <div className="form-group">
              <label htmlFor="latitude">Latitude</label>
              <input type="text" id="latitude" placeholder="Enter latitude" />
            </div>
            <div className="form-group">
              <label htmlFor="longitude">Longitude</label>
              <input type="text" id="longitude" placeholder="Enter longitude" />
            </div>
          </div>
          <div className="submit-container">
            <button className="submit-button">Submit</button>
          </div>
        </div>
        <div className="map-container">
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default Progile;
