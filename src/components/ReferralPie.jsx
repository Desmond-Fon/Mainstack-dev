

// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";

// ChartJS.register(ArcElement, Tooltip, Legend);
import { VictoryChart, VictoryStack, VictoryGroup, VictoryArea, VictoryPortal, VictoryScatter, VictoryAxis } from 'victory';

export const ReferralPie = () => {
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
                            scale={{ x: "time" }} width={400} height={300}>
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




