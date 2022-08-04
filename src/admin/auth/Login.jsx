import React from "react";
import { Route, Switch, NavLink, useLocation } from "react-router-dom";
// import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// import {
//   Input,
// } from "reactstrap"
import { Input, Button, Checkbox } from "antd";

import "./Login.css";

export default function () {
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  return (
    <div>
      <div className="ad-lg-hd-tl">
        {" "}
        <ShoppingCartIcon style={{ color: "#2eade7" }} /> E-Commerce{" "}
      </div>
      {/* <img src="/logo.png" /> */}

      {/* <Button variant="contained">Hello World</Button> <AccessAlarmIcon /> Login
      Page
      <NavLink exact to={"/admin/register"}>
        Register
      </NavLink> */}

      <div className="ad-lg-mnbx">
        <div>
          <div className="ad-lg-tl-bx">
            <div className="ad-lg-tl"> Login </div>
            <NavLink className="ad-nvlk" exact to={"/admin/register"}>
              Don't have an account?
            </NavLink> 
          </div>
          <br />

          <div className="ad-lg-inp-bx">
            <div className="ad-lg-inp-tl"> Email Address </div>

            <Input placeholder="Enter Email" />
          </div>

          <div className="ad-lg-inp-bx">
            <div className="ad-lg-inp-tl"> Password</div>

            <Input placeholder="Enter Password" />
          </div>

          <div className="ad-lg-tl-bx">
            <Checkbox onChange={onChange}>Keep me sign in</Checkbox> 
            <NavLink className="ad-nvlk" exact to={"/admin/forgot"}>
            Forgot Password? 
            </NavLink> 
          </div>

          <br />
          <br />

          <Button type="primary" block>   Login   </Button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
