import React, { useState, useEffect } from "react";
import { Route, Switch, NavLink, useLocation } from "react-router-dom";
// import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; 
import TableComponent from "../../../component/TableComponent"; 
import DeleteIcon from '@mui/icons-material/Delete';
 
import { Input, Button, Checkbox } from "antd";

import "./Client.css";

import { Avatar, Card } from "antd";
const { Meta } = Card;
const headCells = [
  {
    id: "emp_id",
    disablePadding: false,
    label: (
      <p style={{ textAlign: "center", minWidth: "16px", margin: "0" }}> Id</p>
    ),
    align:"center",
  },
  {
    id: "emp_name",
    disablePadding: false,
    label: (
      <p style={{ textAlign: "center", minWidth: "20px", margin: "0" }}>
        First Name
      </p>
    ),
    align:"center",
  },
  {
    id: "role",
    disablePadding: false,
    label: (
      <p style={{ textAlign: "center", minWidth: "10px", margin: "0" }}>Last Name</p>
    ),
    align:"center",
  },
  {
    id: "team_name",
    disablePadding: false,
    label: (
      <p style={{ textAlign: "center", minWidth: "10px", margin: "0" }}>
        Email
      </p>
    ),
    align:"center",
  },
 
  {
    id: "emp_ass_crs",
    disablePadding: false,
    label: (
      <p style={{ textAlign: "center", minWidth: "20px", margin: "0" }}>
        Created At
      </p>
    ),
    align:"center",
  },
  {
    id: "emp_ass_crs_last",
    disablePadding: false,
    label: (
      <p style={{ textAlign: "center", minWidth: "20px", margin: "0" }}>
        Last Visited At
      </p>
    ),
    align:"center",
  },
  {
    id: "emp_action",
    align: "center",
    disablePadding: false,
    label: (
      <p style={{ textAlign: "center", minWidth: "20px", margin: "0" }}>
      Actions
    </p>
    ),
    align:"center",
  },
];

let rowFieldDataName = [
  "_id",
  "firstName",
  "lastName",
  "email",
  "createdAt",
  "updatedAt",
  
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
      rowFieldDataName={rowFieldDataName}
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
    action : <div className="tb-action-ic-bx"> <DeleteIcon/> </div> 
  },
 
  
  {
    firstName: "Tobn",
    lastName: "Doe",
    email: "john@gm.com",
    createdAt: "23/01/1990",
    updatedAt: "24/01/1990",
    _id: "1",
    action : <div className="tb-action-ic-bx"> <DeleteIcon/> </div> 
  },

  {
    firstName: "Mary",
    lastName: "Doe",
    email: "john@gm.com",
    createdAt: "23/01/1990",
    updatedAt: "24/01/1990",
    _id: "2",
    action : <div className="tb-action-ic-bx"> <DeleteIcon/> </div> 
  },
 
];

 