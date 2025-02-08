import ReactApexChart from "react-apexcharts";

const LineChart = () => {
  const options = {
    chart: {
      type: "line",
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3,
      },
    },
    colors: ["#7367F0"],
  };

  const series = [
    {
      name: "Sessions",
      data: [1200, 1500, 1000, 1700, 1300, 1800, 2200],
    },
  ];

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={300}
    />
  );
};

export default LineChart;
