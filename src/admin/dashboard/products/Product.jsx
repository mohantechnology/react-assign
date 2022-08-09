import React, { useState, useEffect } from "react";
import { Route, Switch, NavLink, useLocation } from "react-router-dom";
// import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ReactStars from "react-stars";
import productList from "../../../data/product";

// import {
//   Input,
// } from "reactstrap"
import { Input, Button, Checkbox } from "antd";

import "./Product.css";

import { Avatar, Card } from "antd";
const { Meta } = Card;

function ProductBox(props) {
  console.log(props);
  return (
    <div className="ad-dsbd-prod-item-bx">
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
        <ReactStars
          count={5}
          value={props.rating}
          size={24}
          color2={"#ffd700"}
          edit={false}
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
    setPageData(
      productList.map((item) => {
        item.link = "/admin/dashboard/product/full-description?id=" + item._id;
        // item.rating = "3";

        return (
          <ProductBox
            key={item._id}
            {...item}
            // title={item.title}
            // desc={item.desc}
            // img={item.img}
            // link={link}
          />
        );
      })
    );
  }, []);

  return (
    <div className="ad-dsbd-st-mn-bx">
      <p className="ad-dsbd-st-tl"> Products</p>
      <div className="ad-dsbd-st-item-par-bx ad-dsbd-prod-item-par-bx">
        {pageData}
      </div>
    </div>
  );
}

 

export { productList , ProductBox };
