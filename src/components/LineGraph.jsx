// import {
//     Chart as ChartJS,
//     LineController,
//     LineElement,
//     PointElement,
//     CategoryScale,
//     LinearScale,
//     Filler,
//   } from "chart.js";
//   import { Line } from "react-chartjs-2";
//   // import axios from "axios";
//   // import { useEffect, useContext } from "react";
//   // import { DataContext } from "../context/data";

//   ChartJS.register(
//     LineController,
//     PointElement,
//     CategoryScale,
//     LinearScale,
//     LineElement,
//     Filler
//   );

  
//   const data = {
//     labels: [
//       "10am",
//       "11am",
//       "12am",
//       "01am",
//       "02am",
//       "03am",
//       "04am",
//       "05am",
//       "06am",
//       "07am",
//     ],
//     datasets: [
//       {
//         label: "Dataset 1",
//         data: [65, 59, 80, 81, 56, 55, 40, 32, 55, 65],
//         fill: true,
//         borderColor: "#FF69B4",
//         backgroundColor: "linear-gradient(180deg, rgba(255, 84, 3, 0.2) 0%, rgba(255, 84, 3, 0) 100%)",
//         tension: 0.1,
//       },
//     ],
//   };
//   const options = {
//     title: {
//       display: true,
//       text: "My Line Chart",
//     },
//     legend: {
//       display: true,
//       position: "bottom",
//     },
//     plugins: {
//       filler: {
//         propagate: true,
//       },
//     },
//   };

  

// export const LineGraph = () => {
//   // const { chartData, setChartData } = useContext(DataContext);

// //  useEffect(() => {
// //     axios
// //       .get('https://fe-task-api.mainstack.io/')
// //       .then((response) => {
// //         setChartData(response.data);

// //       });
// //   }, [setChartData]);

//   // console.log(chartData);

//     return ( <>
//             <Line data={data} options={options} />
//     </> );
// }
 
// // export default LineGraph;





// // import {AreaChart} from "@d3/area-chart"

// // chart = AreaChart([65, 59, 80, 81, 56, 55, 40, 32, 55, 65], {
// //   x: d => d.date,
// //   y: d => d.close,
// //   yLabel: "↑ Daily close ($)",
// //   // width,
// //   height: 500,
// //   color: "steelblue"
// // })

// // aapl = FileAttachment("aapl.csv").csv({typed: true})



// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";

// ChartJS.register(ArcElement, Tooltip, Legend);
import { VictoryChart, VictoryStack, VictoryGroup, VictoryArea, VictoryPortal, VictoryScatter, VictoryAxis } from 'victory';

export const LineGraph = () => {
//   const data = {
//     datasets: [
//       {
//         data: [60, 20, 50],
//         backgroundColor: ["#FD7F0B", "#5D5FEF", "#242636"],
//         cutoutPercentage: 80,
//         borderWidth: [0, 0, 0],
//       },
//     ],
//   };
  return (
<div>                
                <div className="chart-areea">
                    <div className="victory-chart">
                        <svg style={{ height: 0 }}>
                            <defs>
                                <linearGradient id="myGradient">
                                    <stop offset="0%" stopColor="rgba(255, 84, 3, 0.2)" />
                                    <stop offset="100%" stopColor="rgba(255, 84, 3, 0)" />
                                    {/* <stop offset="50%" stopColor="gold" />
                                    <stop offset="75%" stopColor="yellow" />
                                    <stop offset="100%" stopColor="green" /> */}
                                </linearGradient>
                            </defs>
                        </svg>
                        <VictoryChart
                            scale={{ x: "time" }} width={750} height={320}>
                            <VictoryStack colorScale={["#005aff50"]}>
                                <VictoryGroup
                                    data={[
                                        { x: new Date(1986, 1, 1), y: 0 },
                                        { x: new Date(1996, 1, 1), y: 4 },
                                        { x: new Date(2006, 1, 1), y: 1 },
                                        { x: new Date(2016, 1, 1), y: 0 }
                                    ]}
                                >
                                    <VictoryArea
                                        style={{
                                            data: { fill: "url(#myGradient)", stroke: '#FF5403', strokeWidth: 2 }
                                        }}
                                        // interpolation="natural"
                                    />
                                    <VictoryPortal>
                                        <VictoryScatter
                                            style={{ data: { fill: 'none' } }}
                                        />
                                    </VictoryPortal>
                                </VictoryGroup>

                            </VictoryStack>

                            <VictoryAxis   dependentAxis crossAxis 
                                style={
                                    {
                                        axis: {
                                            stroke: 'red',
                                            fill: "red",
                                            strokeWidth: 0
                                        },
                                        // data: { fill: 'lightblue', stroke: 'black' },
                                        ticks: {
                                            size: 15,
                                            stroke: 'black',
                                            strokeOpacity: 0.2,
                                            strokeDasharray: '5, 5',
                                        },
                                        grid: {
                                            stroke: 'rgba(0, 0, 0, 0.2)',
                                            strokeWidth: 1,
                                            strokeDasharray: '5, 5',
                                        },
                                        axisLabels: {
                                            fontSize: '9px',
                                            fontFamily: 'inherit',
                                            fillOpacity: 1,
                                            marginLeft: 10,
                                            padding: 0
                                        },
                                        axisLabel: {
                                            fontsize: 13
                                        }
                                    }
                                }

                            />
                            <VictoryAxis 
                            style={
                                {
                                    axis: {
                                        stroke: 'red',
                                        fill: "red",
                                        strokeWidth: 0
                                    },
                                    // data: { fill: 'lightblue', stroke: 'black' },
                                
                                }
                            }
                         
                            />
                        </VictoryChart>
                    </div>
                </div>
            </div>
  );
};




