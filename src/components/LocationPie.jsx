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
    const users = await axios.get("https://fe-task-api.mainstack.io/");
    setLocation(users.data.top_locations);
  };

  useEffect(() => {
    getLocation();
  }, []);

  console.log(location.percent);

  // console.log(chartData);
  // const first = location.top_locations[0].count
  // const second = location.top_locations[1].count
  // const third = location.top_locations[2].count
  // const forth = location.top_locations[3].count
  // const five = location.top_locations[5].count
  // const data = {
  //   // datasets: [
  //   //   {
  //   //     data: [7, 34, 7, 23, 34],
  //   //     backgroundColor: ["#FD7F0B", "#5D5FEF", "#242636", "#242636", "#242636"],
  //   //     // cutoutPercentage: 80,
  //   //     // borderWidth: [0, 0, 0, 0, 0],
  //   //   },
  //   // ],
  // };
  return (
    <div className="p-[24px]">
      <div className=" flex justify-between items-center flex-wrap ">
        <div>
          <p className="text-[15px] font-extrabold text-[#131316]">
            Top Locations
          </p>
        </div>
        <button>
          <p className="text-[13px] text-[#FF5403] font-bold">
            {" "}
            View full reports
          </p>
        </button>
      </div>
      <div className="flex justify-between items-center mt-[52px]">
        <div className="flex flex-col items-start gap-[20px]">
          <div className="flex items-center gap-[8px]">
            <div className="w-[21px] h-[15px] flex justify-center items-center rounded-[3px]">
              <img
                src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682326658/main%20stack/Vector_przdx8.png"
                alt=""
                className="w-[21px] h-[15px] flex justify-center items-center rounded-[3px]"
              />
            </div>
            <div className="flex items-center gap-[12px] text-[14px]">
              <p>Nigeria</p>
              <p className="font-bold">{location[0].percent}%</p>
              <div className="w-[12px] h-[12px] rounded-full bg-[#599EEA]"></div>
            </div>
          </div>

          <div className="flex items-center gap-[8px]">
            <div className="w-[21px] h-[15px] flex justify-center items-center rounded-[3px]">
              <img
                src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682441513/main%20stack/Country_United_States_of_America_Style_Flag_Radius_On_msk1ne.jpg"
                alt=""
                className="w-[21px] h-[15px] flex justify-center items-center rounded-[3px]"
              />
            </div>
            <div className="flex items-center gap-[12px] text-[14px]">
              <p>United States</p>
              <p className="font-bold">{location[1].percent}%</p>
              <div className="w-[12px] h-[12px] rounded-full bg-[#844FF6]"></div>
            </div>
          </div>

          <div className="flex items-center gap-[8px]">
            <div className="w-[21px] h-[15px] flex justify-center items-center rounded-[3px]">
              <img
                src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682326656/main%20stack/Country_Netherlands_Style_Flag_Radius_On_ms90iz.png"
                alt=""
                className="w-[21px] h-[15px] flex justify-center items-center rounded-[3px]"
              />
            </div>
            <div className="flex items-center gap-[12px] text-[14px]">
              <p>Neitherlands</p>
              <p className="font-bold">{location[2].percent}%</p>
              <div className="w-[12px] h-[12px] rounded-full bg-[#0FB77A]"></div>
            </div>
          </div>

          <div className="flex items-center gap-[8px]">
            <div className="w-[21px] h-[15px] flex justify-center items-center rounded-[3px]">
              <img
                src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682326656/main%20stack/Country_Andorra_Style_Flag_Radius_On_mk2r6x.png"
                alt=""
                className="w-[21px] h-[15px] flex justify-center items-center rounded-[3px]"
              />
            </div>
            <div className="flex items-center gap-[12px] text-[14px]">
              <p>Andorra</p>
              <p className="font-bold">{location[3].percent}%</p>
              <div className="w-[12px] h-[12px] rounded-full bg-[#FAB70A]"></div>
            </div>
          </div>

          <div className="flex items-center gap-[8px]">
            <div className="w-[21px] h-[15px] flex justify-center items-center rounded-[3px]">
              <img
                src=""
                alt=""
                className="w-[21px] h-[15px] flex justify-center items-center rounded-[3px]"
              />
            </div>
            <div className="flex items-center gap-[12px] text-[14px]">
              <p>Others</p>
              <p className="font-bold">{location[4].percent}%</p>
              <div className="w-[12px] h-[12px] rounded-full bg-[#F09468]"></div>
            </div>
          </div>
        </div>
        <div className="w-[160px]">
          <Doughnut
            data={{
              datasets: [
                {
                  data: [20, 34, 7, 23, 34],
                  backgroundColor: [
                    "#FD7F0B",
                    "#5D5FEF",
                    "#242636",
                    "#242636",
                    "#242636",
                  ],
                  // cutoutPercentage: 80,
                  // borderWidth: [0, 0, 0, 0, 0],
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};
