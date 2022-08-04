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
        <ShoppingCartIcon style={{ color: "#2eade7" }} /> E-Commerce
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
            <div className="ad-lg-tl"> Sign up </div>
            <NavLink className="ad-nvlk" exact to={"/admin/login"}>
              Already have an account?
            </NavLink>
          </div>
          <br />

          <div className="ad-lg-inp-bx">
            <div className="ad-lg-inp-tl"> First Name*</div>

            <Input placeholder="John" />
          </div>

          <div className="ad-lg-inp-bx">
            <div className="ad-lg-inp-tl"> Last Name*</div>

            <Input placeholder="Doe" />
          </div>

          <div className="ad-lg-inp-bx">
            <div className="ad-lg-inp-tl"> Email Address*</div>

            <Input placeholder="john@example.com" />
          </div>

          <div className="ad-lg-inp-bx">
            <div className="ad-lg-inp-tl"> Password</div>

            <Input type="password" placeholder="*****" />
          </div>
          <div className="">
            By Signing up, you agree to our 
            <NavLink className="ad-nvlk" exact to={"/admin/terms-of-service"}>  &nbsp;Terms of Service   </NavLink>
             and 
            <NavLink className="ad-nvlk" exact to={"/admin/privacy-policy"}> Privacy Policy   </NavLink>
          </div>

          <br />
          <br />

          <Button type="primary" block>
            Create Account
          </Button>
        </div>
      </div>
      {/* </div> */}


      <br />
          <br />

          <br />
          <br />

    </div>
  );
}
