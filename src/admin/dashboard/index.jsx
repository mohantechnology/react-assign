import React, { useState, useEffect, Suspense } from "react";
import { Route, Switch, NavLink, useLocation } from "react-router-dom";
import PageNotFound from "../../component/PageNotFound";
import PageLoader from "../../component/PageLoader";
import Slider from "./Slider";
import Navbar from "./Navbar";
// import Login from "../admin/auth/Login";
// import Register from '../admin/auth/Register';
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GridViewIcon from "@mui/icons-material/GridView";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DiscountIcon from "@mui/icons-material/Discount";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import GavelIcon from "@mui/icons-material/Gavel";

import "./index.css";
import "./dahboardStats/DashboardStats.css";

// const Login = React.lazy(() => import('../admin/auth/Login'));
const DashboardStats = React.lazy(() =>
  import("./dahboardStats/DashboardStats")
);
const Products = React.lazy(() => import("./products/Product"));
const ProductFullDescription = React.lazy(() => import("./products/ProductFullDescription"));
//  src/admin/dashboard/products/Product.css
export default function () {
  return (
    <div className="ad-dsbd-mn-bx">
      {/* dahsboard */}

      <Slider sliderList={sliderList} />

      <div className="ad-dsbd-right-mn-bx">
        <Navbar />
        <DashboardBody />
      </div>

      <div></div>
    </div>
  );
}

function DashboardBody() {
  return (
    <div className="ad-dsbd-view-mn-bx">
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route
            exact
            path="/admin/dashboard/statistic"
            component={DashboardStats}
          />
          <Route exact path="/admin/dashboard/product" component={Products} />
          <Route exact path="/admin/dashboard/product/full-description" component={ProductFullDescription} />
     
        </Switch>
      </Suspense>
    </div>
  );
}

const sliderList = [
  {
    label: "Dashboard",
    icon: <GridViewIcon />,
    link: "/admin/dashboard/statistic",
    matchedChildRoutes: [ ] , 
  },
  {
    label: "Products",
    icon: <InventoryIcon />,
    link: "/admin/dashboard/product",
    matchedChildRoutes: [ 
      "/admin/dashboard/product/full-description",
     ] , 
  },
  // {
  //   label: "Shipping",
  //   icon: <LocalShippingIcon />,
  //   link: "/admin/dashboard/shipping",
  // },
  {
    label: "Ordered",
    icon: <GavelIcon />,
    link: "/admin/dashboard/order",
    matchedChildRoutes: [ ] , 
  },

  {
    label: "Discount Code",
    icon: <LocalOfferIcon />,
    link: "/admin/dashboard/discount-code",
    matchedChildRoutes: [ ] , 
  },

  {
    label: "Client",
    icon: <PeopleAltIcon />,
    link: "/admin/dashboard/client",
    matchedChildRoutes: [ ] , 
  },
  // {
  //   label: "Coupon",
  //   icon: <DiscountIcon />,
  //   link: "/admin/dashboard/coupon",
  // },

  //  {
  //   label: "Admin",
  //   icon :  <AccessAlarmIcon style={{fontSize:"25px"}}/>,
  //   link  :"/admin/dashboard/admin",
  //  },
];
