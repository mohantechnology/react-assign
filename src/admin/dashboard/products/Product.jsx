import React, { useState, useEffect } from "react";
import { Route, Switch, NavLink, useLocation } from "react-router-dom";
// import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ReactStars from "react-stars";
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

const productList = [

  {
    title: "This is card this is tile ",
    desc: "lps someone who is hungry, but at a cost of being hungry yoursel",
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    _id: "0",
    price: "1000",
    discountPercentage: "17",
    rating: 3,

    about: [
      {
        title: "Processor",
        desc: " MediaTek Helio G25 Octa-core; Up to 2.0GHz clock speed Camera: 13 MP Rear camera with AI portrait| 5 MP front camera",
      },
      {
        title: "Display",
        desc: " 16.58 centimeters (6.53-inch) HD+ display with 720x1600 pixels and 20:9 aspect ratio",
      },
      {
        title: "Battery",
        desc: " 5000 mAH large battery with 10W wired charger in-box",
      },
      {
        title: "Memory",
        desc: " Storage & SIM: 3GB RAM | 32GB storage | Dual SIM (nano+nano) + Dedicated SD card slot",
      },
      {
        title: "form_factor",
        desc: "Bar,operating_system:MIUI 12",
      },
    ],

    quesitionAnswer: [
      {
        question: "I want buy cash on delevery",
        answer: "Yes definitely you got it when available in Stock ",
      },
      {
        question: "Is it support volte  ",
        answer: "Yes definitely you got it when available in Stock ",
      },
      {
        question: "When will next date for sale is scheduled ?",
        answer: "22 sept ",
      },
      {
        question: "Is in this fingerprint?",
        answer: "Yes definitely ",
      },
      {
        question: "Service center available all india?",
        answer: "Yes 100 percent",
      },
    ],
  },
  {
    title: "Altruism refers to behavior",
    desc: "Altruism refers to behavior that benefits another individual at a cost to oneself. For example, giving your lunch away is altruistic because it helps someone who is hungry, but at a cost of being hungry yoursel",
    img: "http://localhost:3000/logo.png",
    _id: "1",
    price: "1000",
    discountPercentage: "32",
    rating: 3,
    about: [
      {
        title: "Processor",
        desc: " MediaTek Helio G25 Octa-core; Up to 2.0GHz clock speed Camera: 13 MP Rear camera with AI portrait| 5 MP front camera",
      },
      {
        title: "Display",
        desc: " 16.58 centimeters (6.53-inch) HD+ display with 720x1600 pixels and 20:9 aspect ratio",
      },
      {
        title: "Battery",
        desc: " 5000 mAH large battery with 10W wired charger in-box",
      },
      {
        title: "Memory",
        desc: " Storage & SIM: 3GB RAM | 32GB storage | Dual SIM (nano+nano) + Dedicated SD card slot",
      },
      {
        title: "form_factor",
        desc: "Bar,operating_system:MIUI 12",
      },
    ],

    quesitionAnswer: [
      {
        question: "I want buy cash on delevery",
        answer: "Yes definitely you got it when available in Stock ",
      },
      {
        question: "Is it support volte  ",
        answer: "Yes definitely you got it when available in Stock ",
      },
      {
        question: "When will next date for sale is scheduled ?",
        answer: "22 sept ",
      },
      {
        question: "Is in this fingerprint?",
        answer: "Yes definitely ",
      },
      {
        question: "Service center available all india?",
        answer: "Yes 100 percent",
      },
    ],
  },

  {
    title: "This is card this is tile ",
    desc: "lps someone who is hungry, but at a cost of being hungry yoursel",
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    _id: "2",
    price: "1000",
    discountPercentage: "17",
    rating: 3,

    about: [
      {
        title: "Processor",
        desc: " MediaTek Helio G25 Octa-core; Up to 2.0GHz clock speed Camera: 13 MP Rear camera with AI portrait| 5 MP front camera",
      },
      {
        title: "Display",
        desc: " 16.58 centimeters (6.53-inch) HD+ display with 720x1600 pixels and 20:9 aspect ratio",
      },
      {
        title: "Battery",
        desc: " 5000 mAH large battery with 10W wired charger in-box",
      },
      {
        title: "Memory",
        desc: " Storage & SIM: 3GB RAM | 32GB storage | Dual SIM (nano+nano) + Dedicated SD card slot",
      },
      {
        title: "form_factor",
        desc: "Bar,operating_system:MIUI 12",
      },
    ],

    quesitionAnswer: [
      {
        question: "I want buy cash on delevery",
        answer: "Yes definitely you got it when available in Stock ",
      },
      {
        question: "Is it support volte  ",
        answer: "Yes definitely you got it when available in Stock ",
      },
      {
        question: "When will next date for sale is scheduled ?",
        answer: "22 sept ",
      },
      {
        question: "Is in this fingerprint?",
        answer: "Yes definitely ",
      },
      {
        question: "Service center available all india?",
        answer: "Yes 100 percent",
      },
    ],
  },
 
  {
    title: "This is card this is tile ",
    desc: "lps someone who is hungry, but at a cost of being hungry yoursel",
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    _id: "3",
    price: "1000",
    discountPercentage: "32",
    rating: 3,

    about: [
      {
        title: "Processor",
        desc: " MediaTek Helio G25 Octa-core; Up to 2.0GHz clock speed Camera: 13 MP Rear camera with AI portrait| 5 MP front camera",
      },
      {
        title: "Display",
        desc: " 16.58 centimeters (6.53-inch) HD+ display with 720x1600 pixels and 20:9 aspect ratio",
      },
      {
        title: "Battery",
        desc: " 5000 mAH large battery with 10W wired charger in-box",
      },
      {
        title: "Memory",
        desc: " Storage & SIM: 3GB RAM | 32GB storage | Dual SIM (nano+nano) + Dedicated SD card slot",
      },
      {
        title: "form_factor",
        desc: "Bar,operating_system:MIUI 12",
      },
    ],

    quesitionAnswer: [
      {
        question: "I want buy cash on delevery",
        answer: "Yes definitely you got it when available in Stock ",
      },
      {
        question: "Is it support volte  ",
        answer: "Yes definitely you got it when available in Stock ",
      },
      {
        question: "When will next date for sale is scheduled ?",
        answer: "22 sept ",
      },
      {
        question: "Is in this fingerprint?",
        answer: "Yes definitely ",
      },
      {
        question: "Service center available all india?",
        answer: "Yes 100 percent",
      },
    ],
  },

  {
    title: "This is card this is tile ",
    desc: "lps someone who is hungry, but at a cost of being hungry yoursel",
    img: "https://joeschmoe.io/api/v1/random",
    _id: "4",
    price: "1000",
    discountPercentage: "5",

    rating: 3,

    about: [
      {
        title: "Processor",
        desc: " MediaTek Helio G25 Octa-core; Up to 2.0GHz clock speed Camera: 13 MP Rear camera with AI portrait| 5 MP front camera",
      },
      {
        title: "Display",
        desc: " 16.58 centimeters (6.53-inch) HD+ display with 720x1600 pixels and 20:9 aspect ratio",
      },
      {
        title: "Battery",
        desc: " 5000 mAH large battery with 10W wired charger in-box",
      },
      {
        title: "Memory",
        desc: " Storage & SIM: 3GB RAM | 32GB storage | Dual SIM (nano+nano) + Dedicated SD card slot",
      },
      {
        title: "form_factor",
        desc: "Bar,operating_system:MIUI 12",
      },
    ],

    quesitionAnswer: [
      {
        question: "I want buy cash on delevery",
        answer: "Yes definitely you got it when available in Stock ",
      },
      {
        question: "Is it support volte  ",
        answer: "Yes definitely you got it when available in Stock ",
      },
      {
        question: "When will next date for sale is scheduled ?",
        answer: "22 sept ",
      },
      {
        question: "Is in this fingerprint?",
        answer: "Yes definitely ",
      },
      {
        question: "Service center available all india?",
        answer: "Yes 100 percent",
      },
    ],
  },

  {
    title: "Altruism refers to behavior",
    desc: "Altruism refers to behavior that benefits another individual at a cost to oneself. For example, giving your lunch away is altruistic because it helps someone who is hungry, but at a cost of being hungry yoursel",
    img: "http://localhost:3000/logo.png",
    _id: "5",
    price: "1000",
    discountPercentage: "32",
    rating: 3,

    about: [
      {
        title: "Processor",
        desc: " MediaTek Helio G25 Octa-core; Up to 2.0GHz clock speed Camera: 13 MP Rear camera with AI portrait| 5 MP front camera",
      },
      {
        title: "Display",
        desc: " 16.58 centimeters (6.53-inch) HD+ display with 720x1600 pixels and 20:9 aspect ratio",
      },
      {
        title: "Battery",
        desc: " 5000 mAH large battery with 10W wired charger in-box",
      },
      {
        title: "Memory",
        desc: " Storage & SIM: 3GB RAM | 32GB storage | Dual SIM (nano+nano) + Dedicated SD card slot",
      },
      {
        title: "form_factor",
        desc: "Bar,operating_system:MIUI 12",
      },
    ],

    quesitionAnswer: [
      {
        question: "I want buy cash on delevery",
        answer: "Yes definitely you got it when available in Stock ",
      },
      {
        question: "Is it support volte  ",
        answer: "Yes definitely you got it when available in Stock ",
      },
      {
        question: "When will next date for sale is scheduled ?",
        answer: "22 sept ",
      },
      {
        question: "Is in this fingerprint?",
        answer: "Yes definitely ",
      },
      {
        question: "Service center available all india?",
        answer: "Yes 100 percent",
      },
    ],
  },

  {
    title: "This is card this is tile ",
    desc: "lps someone who is hungry, but at a cost of being hungry yoursel",
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    _id: "6",
    price: "1000",
    discountPercentage: "17",
    rating: 3,

    about: [
      {
        title: "Processor",
        desc: " MediaTek Helio G25 Octa-core; Up to 2.0GHz clock speed Camera: 13 MP Rear camera with AI portrait| 5 MP front camera",
      },
      {
        title: "Display",
        desc: " 16.58 centimeters (6.53-inch) HD+ display with 720x1600 pixels and 20:9 aspect ratio",
      },
      {
        title: "Battery",
        desc: " 5000 mAH large battery with 10W wired charger in-box",
      },
      {
        title: "Memory",
        desc: " Storage & SIM: 3GB RAM | 32GB storage | Dual SIM (nano+nano) + Dedicated SD card slot",
      },
      {
        title: "form_factor",
        desc: "Bar,operating_system:MIUI 12",
      },
    ],

    quesitionAnswer: [
      {
        question: "I want buy cash on delevery",
        answer: "Yes definitely you got it when available in Stock ",
      },
      {
        question: "Is it support volte  ",
        answer: "Yes definitely you got it when available in Stock ",
      },
      {
        question: "When will next date for sale is scheduled ?",
        answer: "22 sept ",
      },
      {
        question: "Is in this fingerprint?",
        answer: "Yes definitely ",
      },
      {
        question: "Service center available all india?",
        answer: "Yes 100 percent",
      },
    ],
  },

  {
    title: "This is card this is tile ",
    desc: "lps someone who is hungry, but at a cost of being hungry yoursel",
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    _id: "7",
    price: "1000",
    discountPercentage: "32",
    rating: 3,

    about: [
      {
        title: "Processor",
        desc: " MediaTek Helio G25 Octa-core; Up to 2.0GHz clock speed Camera: 13 MP Rear camera with AI portrait| 5 MP front camera",
      },
      {
        title: "Display",
        desc: " 16.58 centimeters (6.53-inch) HD+ display with 720x1600 pixels and 20:9 aspect ratio",
      },
      {
        title: "Battery",
        desc: " 5000 mAH large battery with 10W wired charger in-box",
      },
      {
        title: "Memory",
        desc: " Storage & SIM: 3GB RAM | 32GB storage | Dual SIM (nano+nano) + Dedicated SD card slot",
      },
      {
        title: "form_factor",
        desc: "Bar,operating_system:MIUI 12",
      },
    ],

    quesitionAnswer: [
      {
        question: "I want buy cash on delevery",
        answer: "Yes definitely you got it when available in Stock ",
      },
      {
        question: "Is it support volte  ",
        answer: "Yes definitely you got it when available in Stock ",
      },
      {
        question: "When will next date for sale is scheduled ?",
        answer: "22 sept ",
      },
      {
        question: "Is in this fingerprint?",
        answer: "Yes definitely ",
      },
      {
        question: "Service center available all india?",
        answer: "Yes 100 percent",
      },
    ],
  },

  {
    title: "This is card this is tile ",
    desc: "lps someone who is hungry, but at a cost of being hungry yoursel",
    img: "https://joeschmoe.io/api/v1/random",
    _id: "8",
    price: "1000",
    discountPercentage: "5",

    rating: 3,

    about: [
      {
        title: "Processor",
        desc: " MediaTek Helio G25 Octa-core; Up to 2.0GHz clock speed Camera: 13 MP Rear camera with AI portrait| 5 MP front camera",
      },
      {
        title: "Display",
        desc: " 16.58 centimeters (6.53-inch) HD+ display with 720x1600 pixels and 20:9 aspect ratio",
      },
      {
        title: "Battery",
        desc: " 5000 mAH large battery with 10W wired charger in-box",
      },
      {
        title: "Memory",
        desc: " Storage & SIM: 3GB RAM | 32GB storage | Dual SIM (nano+nano) + Dedicated SD card slot",
      },
      {
        title: "form_factor",
        desc: "Bar,operating_system:MIUI 12",
      },
    ],

    quesitionAnswer: [
      {
        question: "I want buy cash on delevery",
        answer: "Yes definitely you got it when available in Stock ",
      },
      {
        question: "Is it support volte  ",
        answer: "Yes definitely you got it when available in Stock ",
      },
      {
        question: "When will next date for sale is scheduled ?",
        answer: "22 sept ",
      },
      {
        question: "Is in this fingerprint?",
        answer: "Yes definitely ",
      },
      {
        question: "Service center available all india?",
        answer: "Yes 100 percent",
      },
    ],
  },
];

export { productList };
