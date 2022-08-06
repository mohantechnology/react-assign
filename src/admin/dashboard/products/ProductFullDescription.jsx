import React, { useState, useEffect } from "react";
import { Route, Switch, NavLink, useLocation } from "react-router-dom";
// import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ReactStars from "react-stars";
import queryString from "query-string";
import { productList } from "./Product";
// import {
//   Input,
// } from "reactstrap"
import { Input, Button, Checkbox } from "antd";

import "./Product.css";
import "./ProductFullDescription.css";

import { Avatar, Card } from "antd";
const { Meta } = Card;
// const queryString = require('query-string');

// ======================||  Production Full Description Box ( image + descritpion   ) ||========================
function ProductDescriptionBox(props) {
  return (
    <div className="ad-dshbd-prod-fd-mn-bx">
      <div className="ad-dshbd-prod-fd-img-bx">
        <img alt="product-img" src={props.img} />
      </div>

      <div className="ad-dshbd-prod-fd-body">
        <Meta title={props.title} description={props.desc} />

        <ReactStars
          count={5}
          value={props.rating}
          size={24}
          color2={"#ffd700"}
          edit={false}
        />
        <div className="ad-dshbd-prod-item-pr-bx">
          <span className="ad-dshbd-prod-item-dis-pr">
            ${(props.discountPercentage * props.price).toFixed(2)}
          </span>
          <span className="ad-dshbd-prod-item-pr">
            <span>M.R.P: </span>
            <span> ${Number(props.price).toFixed(2)} </span>(
            {props.discountPercentage}% off )
          </span>
        </div>
        <AboutProduct dataList={props.about} />
      </div>
    </div>
  );
}

// ======================||   About Component   ||========================

function AboutProduct({ dataList }) {
  return (
    <div className="ad-dshbd-prod-item-dis-ab-bx">
      <span> About this item</span>
      <ul>
        {dataList &&
          dataList.map &&
          dataList.map((item, idx) => {
            return (
              <li key={idx}>
                <span>{item.title}:</span>
                <span>{item.desc}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
// ======================||  Question Answer Component  ||========================

function QuestionAnswerBox({ dataList }) {
  function QuestionAnswerBlock(data) {
    return (
      <div>
        <div>
          <span> Question: </span>
          <span> {data.question}</span>
        </div>
        <div>
          <span> Answer: </span>
          <span> {data.answer}</span>
        </div>
        <span></span>
      </div>
    );
  }
  return (
    <div className="ad-dshbd-prod-item-ques-ans-bx ">
      {/* <ul> */}
      {dataList.map((item, idx) => {
        return <QuestionAnswerBlock {...item} key={idx} />;
      })}
      {/* </ul> */}
    </div>
  );
}

export default function ({}) {
  const [pageData, setPageData] = useState([]);
  const [questionAnswer, setQuestionAnswer] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const parsedQueryData = queryString.parse(location.search);
    if (parsedQueryData.id && productList[parsedQueryData.id]) {
      let data = productList[parsedQueryData.id];
      setPageData(<ProductDescriptionBox {...data} />);
      // store questionAnser data to be accessbile for QuestionAnsw
      if (data.quesitionAnswer) {
        setQuestionAnswer(
          <QuestionAnswerBox dataList={data.quesitionAnswer} />
        );
      }
    } else {
      setPageData(<h1 style={{ marginLeft: "10px" }}> Item Not found </h1>);
    }
  }, []);

  return (
    <div className="ad-dsbd-st-mn-bx ad-dsbd-st-pd-fl-mn-bx">
      <p className="ad-dsbd-st-tl"> Products Description</p>

      <div className="ad-dsbd-fl-de-bx-bd-par">
        <div className="ad-dsbd-st-item-par-bx">{pageData}</div>
      </div>
      <p className="ad-dsbd-st-tl">Frequently Asked Question</p>
      <div className="ad-dsbd-st-item-qa-par-bx">
        {questionAnswer}
        <div> </div>
      </div>

      
    </div>
  );
}

// const aboutDataList = [
//   {
//     title: "Processor",
//     desc: " MediaTek Helio G25 Octa-core; Up to 2.0GHz clock speed Camera: 13 MP Rear camera with AI portrait| 5 MP front camera",
//   },
//   {
//     title: "Display",
//     desc: " 16.58 centimeters (6.53-inch) HD+ display with 720x1600 pixels and 20:9 aspect ratio",
//   },
//   {
//     title: "Battery",
//     desc: " 5000 mAH large battery with 10W wired charger in-box",
//   },
//   {
//     title: "Memory",
//     desc: " Storage & SIM: 3GB RAM | 32GB storage | Dual SIM (nano+nano) + Dedicated SD card slot",
//   },
//   {
//     title: "form_factor",
//     desc: "Bar,operating_system:MIUI 12",
//   },
// ];

// const quesitionAnswerData = [
//   {
//     question: "I want buy cash on delevery",
//     answer: "Yes definitely you got it when available in Stock ",
//   },
//   {
//     question: "Is it support volte  ",
//     answer: "Yes definitely you got it when available in Stock ",
//   },
//   {
//     question: "When will next date for sale is scheduled ?",
//     answer: "22 sept ",
//   },
//   {
//     question: "Is in this fingerprint?",
//     answer: "Yes definitely ",
//   },
//   {
//     question: "Service center available all india?",
//     answer: "Yes 100 percent",
//   },
// ];
