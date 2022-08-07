import React, { useState, useEffect } from "react";
import { Route, Switch, NavLink, useLocation } from "react-router-dom";
// import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; 
import TableComponent from "../../../component/TableComponent"; 

 
import { Input, Button, Checkbox } from "antd";

import "./Client.css";

import { Avatar, Card } from "antd";
const { Meta } = Card;
const headCells = [
  {
    id: "emp_id",
    disablePadding: false,
    label: (
      <p style={{ textAlign: "center", width: "86px", margin: "0" }}>Emp ID</p>
    ),
  },
  {
    id: "emp_name",
    disablePadding: false,
    label: (
      <p style={{ textAlign: "left", width: "200px", margin: "0" }}>
        Employee Name
      </p>
    ),
  },
  {
    id: "role",
    disablePadding: false,
    label: (
      <p style={{ textAlign: "left", width: "100px", margin: "0" }}>Role</p>
    ),
  },
  {
    id: "team_name",
    disablePadding: false,
    label: (
      <p style={{ textAlign: "left", width: "190px", margin: "0" }}>
        Team Name
      </p>
    ),
  },
  {
    id: "bu_name",
    disablePadding: false,
    label: (
      <p style={{ textAlign: "left", width: "190px", margin: "0" }}>BU Name</p>
    ),
  },
  {
    id: "emp_ass_crs",
    disablePadding: false,
    label: (
      <p style={{ textAlign: "center", minWidth: "200px", margin: "0" }}>
        Assigned Course
      </p>
    ),
  },
  {
    id: "emp_action",
    align: "center",
    disablePadding: false,
    label: (
      <p style={{ textAlign: "center", minWidth: "100px", margin: "0" }} />
    ),
  },
];

let row_field_data_name = [
  "emp_id",
  "emp_nm",
  "role",
  "team_name",
  "buss_name",
  "emp_ass_crs",
  "action",
];


function ProductBox(props) {
  console.log(props);
  return (
    <div className="">
      <Card
        style={{
          width: 300,
        }}
        cover={
          <NavLink className="ad-nvlk" exact to={props.link || ""}>
            <img alt="example" src={props.img} />
          </NavLink>
        }
        // actions={[
        //   <AccessAlarmIcon key="setting" />,
        //   <AccessAlarmIcon key="edit" />,
        //   <AccessAlarmIcon key="ellipsis" />,
        // ]}
      >
        <Meta
          // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={props.title}
          description={props.desc}
        />
      
        <div className="ad-dshbd-prod-item-pr-bx">
          <span className="ad-dshbd-prod-item-dis-pr">
            {" "}
            ${((props.discountPercentage * props.price) / 100).toFixed(2)}
          </span>
          <span className="ad-dshbd-prod-item-pr">
            <span>M.R.P: </span>
            <span> ${Number(props.price).toFixed(2)} </span> (
            {props.discountPercentage}% off )
          </span>
        </div>
      </Card>
    </div>
  );
}

export default function ({}) {
  const [pageData, setPageData] = useState([]);

  useEffect(() => {

    setPageData(   <TableComponent
      key='client_table'
      rows={clientList}
      headCells={headCells}
      row_field_data_name={row_field_data_name}
    /> );
    
  }, []);

  return (
    <div className="ad-dsbd-st-mn-bx">
      <p className="ad-dsbd-st-tl"> Clients</p>
      <div className="ad-dsbd-st-item-par-bx ad-dsbd-prod-item-par-bx">
        {pageData}
      </div>
    </div>
  );
}

const clientList = [

  {
    firstName: "John",
    lastName: "Doe",
    email: "john@gm.com",
    createdAt: "23/01/1990",
    updatedAt: "24/01/1990",
    _id: "0",
  },
 
  
  {
    firstName: "Tobn",
    lastName: "Doe",
    email: "john@gm.com",
    createdAt: "23/01/1990",
    updatedAt: "24/01/1990",
    _id: "1",
  },

  {
    firstName: "Mary",
    lastName: "Doe",
    email: "john@gm.com",
    createdAt: "23/01/1990",
    updatedAt: "24/01/1990",
    _id: "2",
  },
 
];

 