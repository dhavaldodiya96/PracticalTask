import "../style/homPage.css";
import { FaPlay } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";

const Homepage = () => {
  return (
    <div className="filter-main-container">
      <div className="filter-container">
        <p className="filter-name">Filter Selection</p>
        <div className="filter-drop-down-container">
          <div className="filter-first-drop-down">
            <div className="filter-lable">
              <label htmlFor="dropdown">Choose an option:</label>
            </div>
            <div>
              <select id="dropdown" name="options" className="dropDownSelect">
                <option value="" disabled selected>
                  Select an option
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
            </div>
          </div>

          <div className="filter-second-drop-down">
            <div className="filter-lable">
              <label htmlFor="dropdown">Choose an option:</label>
            </div>
            <div>
              <select id="dropdown" name="options" className="dropDownSelect">
                <option value="" disabled selected>
                  Select an option
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
            </div>
          </div>

          <div className="play-Button">
            <button className="play">
              <FaPlay />
            </button>
          </div>
        </div>
      </div>

      <div className="main-table-container">
        <p className="lorem-title">Loram Iporam</p>
        <div className="list-search-container">
          <div>
            <p className="show-result">showResult:</p>
          </div>
          <div className="search-container">
            <input className="search-box" type="text" placeholder="Search..." />
            <CiSearch className="search-icon" />
          </div>
        </div>
        <div className="table-structur">
          <table>
            <thead>
              <tr>
                <th>Loram Iporam</th>
                <th>Loram Iporam</th>
                <th>Loram Iporam</th>
                <th>status</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Loram Iporam</td>
                <td>Development</td>
                <td>7</td>
                <td>on</td>
                <td>
                  <CiEdit />
                </td>
              </tr>
              <tr>
                <td>Loram Iporam</td>
                <td>Development</td>
                <td>7</td>
                <td>on</td>
                <td>
                  <CiEdit />
                </td>
              </tr>
              <tr>
                <td>Loram Iporam</td>
                <td>Development</td>
                <td>7</td>
                <td>on</td>
                <td>
                  <CiEdit />
                </td>
              </tr>
              <tr>
                <td>Loram Iporam</td>
                <td>Development</td>
                <td>7</td>
                <td>on</td>
                <td>
                  <CiEdit />
                </td>
              </tr>
              <tr>
                <td>Loram Iporam</td>
                <td>Development</td>
                <td>7</td>
                <td>on</td>
                <td>
                  <CiEdit />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="priview-container">
          <p className="showing-text">Showing 1 to 4 of 4 entries</p>
          <div className="previous-next-container">
            <button className="Previous">Previous</button>
            <button className="number">1</button>
            <button className="Previous">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
