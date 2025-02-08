import DonutChart from "../Components/DonutChart";
import LineChart from "../Components/lineChart";
import LineGraph from "../Components/LineGraph";
// import RadialChart from "../Components/RadialChart";
import "../style/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="stats-row">
        <div className="card">
          <LineGraph />
        </div>
        <div className="card">
          {" "}
          <LineGraph />
        </div>
        <div className="card">
          {" "}
          <LineGraph />
        </div>
      </div>
      <div className="charts-row">
        <div className="donut-chart">
          <DonutChart />
        </div>
        <div className="sessions-chart">
          <LineChart />
        </div>
      </div>
      <div className="footer-stats">
        {/* <div className="social-media">
          <RadialChart />
        </div> */}
        <div className="social-media">Facebook</div>
      </div>
    </div>
  );
};

export default Dashboard;
