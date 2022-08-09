import React, { useState, useEffect } from "react";
import { Route, Switch, NavLink, useLocation } from "react-router-dom";
// import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TableComponent from "../../../component/TableComponent";
import DeleteIcon from "@mui/icons-material/Delete";

import orderedList from "../../../data/ordered";
import { ProductBox } from "../products/Product";

import { Input, Button, Checkbox, Modal } from "antd";

import "./Ordered.css";

import { Avatar, Card } from "antd";
const { Meta } = Card;

// "Client",
// "Ordered Items",
// "CheckOut At",
const headCells = [
  {
    id: "_id",
    disablePadding: false,
    label: (
      <p style={{ textAlign: "center", minWidth: "16px", margin: "0" }}> No.</p>
    ),
    align: "center",
  },
  {
    id: "emp_name",
    disablePadding: false,
    label: (
      <p style={{ textAlign: "center", minWidth: "20px", margin: "0" }}>
        Client Name
      </p>
    ),
    align: "center",
  },
  {
    id: "role",
    disablePadding: false,
    label: (
      <p style={{ textAlign: "center", minWidth: "10px", margin: "0" }}>
        Ordered Items
      </p>
    ),
    align: "center",
  },
  {
    id: "team_name",
    disablePadding: false,
    label: (
      <p style={{ textAlign: "center", minWidth: "10px", margin: "0" }}>
        Total Price
      </p>
    ),
    align: "center",
  },

  {
    id: "emp_ass_crs",
    disablePadding: false,
    label: (
      <p style={{ textAlign: "center", minWidth: "20px", margin: "0" }}>
        Discount Code
      </p>
    ),
    align: "center",
  },
  {
    id: "emp_ass_crs_last",
    disablePadding: false,
    label: (
      <p style={{ textAlign: "center", minWidth: "20px", margin: "0" }}>
        Checkout At
      </p>
    ),
    align: "center",
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
    align: "center",
  },
];

let rowFieldDataName = [
  "_id",
  "clientName",
  "product",
  "price",
  "discountCode",
  "createdAt",
  // "updatedAt",
  "action",
];

// ===========================|| Product Modal Component ||====================================

const ModalComponent = ({ modalData }) => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [modalElementBox, setModalElementBox] = useState(true);

  useEffect(() => {
    let elemList = modalData.productDetail.map((item, idx) => {
      item.link = "/admin/dashboard/product/full-description?id=" + item._id;
      return (
        // <div className="ad-ord-pro-bx" key={idx}>
         <ProductBox   key={item._id}
            {...item}/> 
        // </div>
      );
    });
    setModalElementBox(elemList);
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
    <div className="ad-md-mn-bx" >
      <Modal
       style={{
        top: "5vh",
      }}
        title="Purchased Items"
        visible={isModalVisible}
        onOk={handleOk}
        // onCancel={handleCancel}
        footer={[
         
          <Button
            key="link" 
            type="primary" 
            onClick={handleOk}
          >
           Ok
          </Button>,
        ]}
      >
         <div className="ad-md-in-bx" >
        {modalElementBox}
      </div>

      </Modal>
      </div>
    </>
  );
};

export default function ({}) {
  const [pageData, setPageData] = useState([]);
  const [modalBox, seModalBox] = useState([]);

  useEffect(() => {
    orderedList.map((item, idx) => {
      item._id = idx + 1;
      item.clientName =
        item.clientDetail.firstName + " " + item.clientDetail.lastName;
      item.price = "$" + item.totalPrice;
      item.product = (
        <p
          className="ad-ord-it-view"
          onClick={(e) => {
            handleViewclick(e, idx);
          }}
        >
          {" "}
          view
        </p>
      );
    });

    setPageData(
      <TableComponent
        key="ordered_table"
        rows={orderedList}
        headCells={headCells}
        rowFieldDataName={rowFieldDataName}
      />
    );
  }, []);

  function handleViewclick(e, currentIndex) {
    console.log(currentIndex);
    seModalBox(<ModalComponent   key={Math.random()} modalData={orderedList[currentIndex]} />);
  }
  return (
    <div className="ad-dsbd-st-mn-bx">
      {modalBox}
      <p className="ad-dsbd-st-tl"> Ordered</p>
      <div className="ad-dsbd-st-item-par-bx ad-dsbd-prod-item-par-bx">
        {pageData}
      </div>
    </div>
  );
}

orderedList.map((item, idx) => {
  item.action = (
    <div key={idx} className="tb-action-ic-bx">
      {" "}
      <span id={"ad-cl-id-" + idx}>
        <DeleteIcon />
      </span>{" "}
    </div>
  );
});
