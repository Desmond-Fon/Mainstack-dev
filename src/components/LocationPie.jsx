import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
  import axios from "axios";
  import { useEffect, useState } from "react";
// import { DataContext } from "../context/data";

ChartJS.register(ArcElement, Tooltip, Legend);

export const LocationPie = () => {
    // const { chartData } = useContext(DataContext);
    const [location, setLocation] = useState([]);

    const getLocation = async () => {
      const users = await axios.get('https://fe-task-api.mainstack.io/');
      setLocation(users.data.top_locations);
     };

     useEffect(() => {
 getLocation()
  }, []);

  console.log(location);

    // console.log(chartData);
    // const first = location.top_locations[0].count
    // const second = location.top_locations[1].count
    // const third = location.top_locations[2].count
    // const forth = location.top_locations[3].count
    // const five = location.top_locations[5].count
  const data = {
    // datasets: [
    //   {
    //     data: [7, 34, 7, 23, 34],
    //     backgroundColor: ["#FD7F0B", "#5D5FEF", "#242636", "#242636", "#242636"],
    //     // cutoutPercentage: 80,
    //     // borderWidth: [0, 0, 0, 0, 0],
    //   },
    // ],
  };
  return (
    <div>
      <div>
      <div className="w-[65%]">
        <Doughnut data={   { datasets: [
      {
        data: [20, 34, 7, 23, 34],
        backgroundColor: ["#FD7F0B", "#5D5FEF", "#242636", "#242636", "#242636"],
        // cutoutPercentage: 80,
        // borderWidth: [0, 0, 0, 0, 0],
      },
    ]}} />
      </div>
      </div>
    </div>
  );
};


