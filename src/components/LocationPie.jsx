import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
// import axios from "axios";
// import { useCallback, useEffect, useMemo } from "react";
// import { DataContext } from "../context/data";

ChartJS.register(ArcElement, Tooltip, Legend);

export const LocationPie = () => {
  // const { chartData } = useContext(DataContext);
  // const [location, setLocation] = useState([]);

  // const getLocation =  () => {
  //   // const users = await axios.get("https://fe-task-api.mainstack.io/");
  //   // console.log(users);
  //   // setLocation(users.data);

  //   axios({
  //     method: "get",
  //     url: "https://fe-task-api.mainstack.io/",
  //     // data: JSON.stringify(data), // <- You add the data to the body here
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       console.log(("response", response))
  //       setLocation(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("error message: ", error.message);
  //     });
  // };

  // useEffect(() => {
  //   console.log('helloo');
  // } ,[])

  // const location = useCallback(() => {
  //   axios({
  //     method: "get",
  //     url: "https://fe-task-api.mainstack.io/",
  //     // data: JSON.stringify(data), // <- You add the data to the body here
  //     // headers: {
  //     //   "Content-Type": "application/json",
  //     //   Accept: "application/json",
  //     // },
  //   })
  //     .then((response) => {
  //       // console.log(("response", response))
  //       // console.log(response.data);
  //       // setLocation(response.data);
  //       return response.data;
  //     })
  //     .catch((error) => {
  //       console.log("error message: ", error.message);
  //     })
  //   // getLocation() ?? []
  //   // fetch("https://fe-task-api.mainstack.io/")
  //   //   .then((res) => res.json())
  //   //   .then((data) => setLocation(data.top_locations));

  // }, []);

  // console.log(location);
  // console.log(location.graph_data);

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

  if (location === undefined) {
    return <>Still loading...</>;
  }

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
            {/* <div className="w-[21px] h-[15px] flex justify-center items-center rounded-[3px]">
              <img
                src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682326658/main%20stack/Vector_przdx8.png"
                alt=""
                className="w-[21px] h-[15px] flex justify-center items-center rounded-[3px]"
              />
            </div> */}
            <div className="flex items-center gap-[12px] text-[14px]">
              {/* <p>
                { location? (location.top_locations[0] ?? '').country : 'Nigeria' }
              </p>
              <p className="font-bold">{ location? (location.top_locations[0] ?? 20)?.percent : 20 } %</p> */}
              <p>Nigeria</p>
              <p className="font-bold">34%</p>
              <div className="w-[12px] h-[12px] rounded-full bg-[#599EEA]"></div>
            </div>
          </div>

          <div className="flex items-center gap-[8px]">
            {/* <div className="w-[21px] h-[15px] flex justify-center items-center rounded-[3px]">
              <img
                src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682441513/main%20stack/Country_United_States_of_America_Style_Flag_Radius_On_msk1ne.jpg"
                alt=""
                className="w-[21px] h-[15px] flex justify-center items-center rounded-[3px]"
              />
            </div> */}
            <div className="flex items-center gap-[12px] text-[14px]">
              {/* <p>{ location? (location.top_locations[0] ?? '').country : 'Nigeria' }</p>
              <p className="font-bold">{ location? (location.top_locations[0] ?? 20)?.percent : 20 }%</p> */}
              <p>Germany</p>
              <p className="font-bold">19%</p>
              <div className="w-[12px] h-[12px] rounded-full bg-[#844FF6]"></div>
            </div>
          </div>

          <div className="flex items-center gap-[8px]">
            {/* <div className="w-[21px] h-[15px] flex justify-center items-center rounded-[3px]">
              <img
                src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682326656/main%20stack/Country_Netherlands_Style_Flag_Radius_On_ms90iz.png"
                alt=""
                className="w-[21px] h-[15px] flex justify-center items-center rounded-[3px]"
              />
            </div> */}
            <div className="flex items-center gap-[12px] text-[14px]">
              {/* <p>{ location? (location.top_locations[0] ?? '').country : 'Nigeria' }</p>
              <p className="font-bold">{ location? (location.top_locations[0] ?? 20)?.percent : 20 }%</p> */}
              <p>Ghana</p>
              <p className="font-bold">25%</p>
              <div className="w-[12px] h-[12px] rounded-full bg-[#0FB77A]"></div>
            </div>
          </div>

          <div className="flex items-center gap-[8px]">
            {/* <div className="w-[21px] h-[15px] flex justify-center items-center rounded-[3px]">
              <img
                src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682326656/main%20stack/Country_Andorra_Style_Flag_Radius_On_mk2r6x.png"
                alt=""
                className="w-[21px] h-[15px] flex justify-center items-center rounded-[3px]"
              />
            </div> */}
            <div className="flex items-center gap-[12px] text-[14px]">
              {/* <p>{ location? (location.top_locations[0] ?? '').country : 'Nigeria' }</p>
              <p className="font-bold">{ location? (location.top_locations[0] ?? 20)?.percent : 20 }%</p> */}
              <p>Finland</p>
              <p className="font-bold">20%</p>
              <div className="w-[12px] h-[12px] rounded-full bg-[#FAB70A]"></div>
            </div>
          </div>

          <div className="flex items-center gap-[8px]">
            {/* <div className="w-[21px] h-[15px] flex justify-center items-center rounded-[3px]">
              <img
                src=""
                alt=""
                className="w-[21px] h-[15px] flex justify-center items-center rounded-[3px]"
              />
            </div> */}
            <div className="flex items-center gap-[12px] text-[14px]">
              {/* <p>{ location? (location.top_locations[0] ?? '').country : 'Nigeria' }</p>
              <p className="font-bold">{ location? (location.top_locations[0] ?? 20)?.percent : 20 }%</p> */}
              <p>United Kingdom</p>
              <p className="font-bold">2%</p>
              <div className="w-[12px] h-[12px] rounded-full bg-[#F09468]"></div>
            </div>
          </div>
        </div>
        <div className="w-[160px]">
          <Doughnut
            data={{
              datasets: [
                {
                  data: [68, 37, 50, 40, 4],
                  backgroundColor: [
                    "#599EEA",
                    "#844FF6",
                    "#0FB77A",
                    "#FAB70A",
                    "#F09468",
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
