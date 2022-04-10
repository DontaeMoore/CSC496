import React, { Component } from 'react'
import {
    PieChart,
    Pie,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
  } from "recharts";

const data = [
    { name: "Attack", users: 200,  fill: 'red' },
    { name: "Defense", users: 150, fill: 'blue'},
    { name: "Health", users: 1000, fill: 'green'}
   
  ];





export default class rechartspie extends Component {
  render() {
    return (
      <div>

        <PieChart width={200} height={150}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={100}
            cy={100}
            outerRadius={40}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
          
      </div>
    )
  }
}
