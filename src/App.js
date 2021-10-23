import { useEffect, useState } from 'react';
import { BarChart, PieChart } from "./components/Chart"
import axios from "axios";
import './App.css';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchPrices = async () => {
      const baseUrl = "https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub"
      const { data } = await axios.post(baseUrl, { "angular_test": "angular-developer" });
      setData({
        labels: data.map((product) => product["Product Name"]),
        datasets: [
          {
            label: "sales",
            data: data.map((product) => product.Sales),
            backgroundColor: [
              "#ffbb11",
              '#B21F00',
              '#C9DE00',
              '#2FDE00',
              '#00A6B4',
              '#6800B4'
            ],
          borderWidth: 1

          }
        ],

      });
    }
    fetchPrices()
  }, []);
  return (
    <div className="App">
      <BarChart chartData={data} />
      <PieChart chartData={data} />
    </div>
  );
}

export default App;
