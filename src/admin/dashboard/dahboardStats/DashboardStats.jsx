import React, { useState, useEffect } from "react";
import { Route, Switch, NavLink, useLocation } from "react-router-dom";
// import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// import {
//   Input,
// } from "reactstrap"
import { Input, Button, Checkbox } from "antd";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


import "./DashboardStats.css";

 

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);




function  ChartBoxForSoldItem({ sliderList }) {
 
  
  useEffect(() => {
  
 
  }, []);

 

  return (
    <div className="ad-dsbd-st-ch-bx-sold">
    <Line options={options} data={data} />;
    </div>
  );
}



export default function ({ sliderList }) {
 
  
  useEffect(() => {
  
 
  }, []);

 

  return (
    <div className="ad-dsbd-st-mn-bx">
    <ChartBoxForSoldItem  />; 
    </div>
  );
}


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Available',
      data:[62, 23, 12, 12, 16, 35, 40],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      fill: true,
      borderColor: 'rgba(1, 1, 1, 0.5)',
      tension: 0.1,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)', 
    ],
    borderColor: [
        'rgba(255,99,132,1)', 
    ],
    // borderWidth: 1
    },
    {
      label: 'Ordered',
      data:[65, 29, 40, 1, 56, 325, 10],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },

    {
      label: 'Sold',
      // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      data: [65, 9, 20, 81, 86, 5, 40], 
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },


   
  ],

};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Product Statistics',
    },
  },
};