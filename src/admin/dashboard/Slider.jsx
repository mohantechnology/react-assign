import React, { useState, useEffect } from "react";
import { Route, Switch, NavLink, useLocation } from "react-router-dom";
// import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// import {
//   Input,
// } from "reactstrap"
import { Input, Button, Checkbox } from "antd";

import "./Slider.css";

function LinkBlock(props) {
  return (
    <div
      className={
        "ad-sl-lb-mn-bx" + (props.data.isSelected ? " ad-sl-lb-mn-bx-selected" : "")
      }
      {...props}
    >
      <div className="ad-sl-lb-icon">{props.data.icon} </div>
      <div className="ad-sl-lb-tl"> {props.data.label} </div>
    </div>
  );
}

export default function ({ sliderList }) {
  const [selectedBlock, setSelectedBlock] = useState(0);
  const [blockList, setBlockList] = useState([]);

  useEffect(() => {
    handleBlockClick(0);
  }, []);

  function handleBlockClick(currentIndex) {
    console.log(currentIndex);
    let elemList = sliderList.map((item, index) => {
        item.isSelected = currentIndex == index  ; 
      return <LinkBlock
        key={index}
        data={item}
        onClick={() => handleBlockClick(index)}
      />;
    });
    setBlockList(elemList);
  }

  return (
    <div className="ad-sl-mn-bx">
      <div className="ad-sl-hd-tl">
        <a href="/">
          <img src="/logo.png" />
        </a>
        <div> E-Commerce </div>
      </div>

      {blockList}
    
    </div>
  );
}
