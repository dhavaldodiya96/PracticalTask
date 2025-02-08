import ReactApexChart from "react-apexcharts";

const DonutChart = () => {
  const options = {
    chart: {
      type: "donut",
    },
    labels: ["USA", "UK", "Spain", "France", "China", "Japan"],
    colors: ["#FF4560", "#775DD0", "#00E396", "#FEB019", "#FF9800", "#775DD0"],
    dataLabels: {
      enabled: true,
    },
    legend: {
      position: "bottom",
    },
  };

  const series = [25, 20, 12, 23, 10, 8]; // Percentages for each label

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="donut"
      height={300}
    />
  );
};

export default DonutChart;
