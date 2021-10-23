import { Pie, Bar } from "react-chartjs-2";

export const PieChart = ({ chartData }) => {
  return (
    <div>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "sales"
            },
            legend: {
              display: true,
              position: "bottom"
                },
          }
        }}
      />
    </div>
  );
};

export const BarChart = ({ chartData }) => {
    return (
      <div>
        <Bar
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "sales"
              },
              legend: {
                display: true,
                position: "bottom"
                  },
            }
          }}
        />
      </div>
    );
  };
