import ReactApexChart from "react-apexcharts";

function LineGraph() {
  const options = {
    chart: {
      type: "line",
      background: "#1E1E2F", // Matches your dark theme
      toolbar: {
        show: false, // Removes extra UI options
      },
    },
    colors: ["#FF00FF", "#00A1FF"], // Line colors

    stroke: {
      curve: "smooth", // Smooth line
      width: 2,
    },
    grid: {
      borderColor: "#333",
    },
    dataLabels: {
      enabled: false, // Hides data points
    },
    markers: {
      size: 5,
      colors: ["#fff"], // White dots

      strokeWidth: 2,
      hover: {
        size: 7, // Bigger size on hover
      },
    },

    yaxis: {
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
    tooltip: {
      theme: "dark", // Matches dark theme
    },
  };

  const series = [
    {
      name: "Income",
      data: [30, 40, 35, 50, 49, 60], // Example data for Income
    },
  ];

  return (
    <div className="chart-container" style={{ width: "400px", margin: "auto" }}>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={200}
      />
    </div>
  );
}

export default LineGraph;
