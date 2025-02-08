import ReactApexChart from "react-apexcharts";

const RadialChart = () => {
  const options = {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: "22px",
            show: true,
          },
        },
      },
    },
    colors: ["#7367F0"],
  };

  const series = [67]; // Percentage value for the radial chart

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="radialBar"
      height={200}
    />
  );
};

export default RadialChart;
