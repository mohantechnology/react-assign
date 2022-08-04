import React, { useState, useEffect, Suspense } from 'react';
import { Route, Switch,  NavLink, useLocation   } from "react-router-dom";
import PageNotFound from "../../component/PageNotFound";
import PageLoader from "../../component/PageLoader";
import Slider from "./Slider";
import Navbar from "./Navbar";
// import Login from "../admin/auth/Login";
// import Register from '../admin/auth/Register';
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
 
import './index.css';

// const Login = React.lazy(() => import('../admin/auth/Login'));
// const Register = React.lazy(() => import('../admin/auth/Register'));


 


export default  function  () {
 
  return (
    <div className="ad-dsbd-mn-bx">
      {/* dahsboard */}

          <Slider sliderList={sliderList}/>
          <Navbar/>

          <div  className="ad-dsbd-view-mn-bx"> 
           <Suspense fallback={<PageLoader/>}>
          <Switch> 
        {/* <Route exact path="/admin/login" component={Login} />
        <Route exact path="/admin/register" component={Register} />
        <Route exact path="/*" component={PageNotFound} /> */}

      </Switch>
      </Suspense>

            </div>                          


      <div   >

      </div>

    

    </div>
  );
} 


const sliderList = [
  {
   label: "Dashboard",
   icon :  <AccessAlarmIcon/>,
   link  :"/admin/dashboard/dashboard",
  },  
  {
    label: "Client",
    icon :  <AccessAlarmIcon/>,
    link  :"/admin/dashboard/client",
   },
   {
    label: "Coupon",
    icon :  <AccessAlarmIcon/>,
    link  :"/admin/dashboard/coupon",
   },
   {
    label: "Discount Code",
    icon :  <AccessAlarmIcon/>,
    link  :"/admin/dashboard/client",
   },
   {
    label: "Admin",
    icon :  <AccessAlarmIcon style={{fontSize:"25px"}}/>,
    link  :"/admin/dashboard/coupon",
   },
]