import React, { useState, useEffect, Suspense } from 'react';
import { Route, Switch,  NavLink, useLocation   } from "react-router-dom";
// import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PageNotFound from "../component/PageNotFound";
import PageLoader from "../component/PageLoader";
// import Login from "../admin/auth/Login";
// import Register from '../admin/auth/Register';


import 'react-toastify/dist/ReactToastify.css';
// import './AdminRoute.css';

const Login = React.lazy(() => import('../admin/auth/Login'));
const Register = React.lazy(() => import('../admin/auth/Register'));


 


function AdminRoute() {
  // alert( "inside app-admin") ; 
  let instruct_img_url;
  return (
    <div className="app-page">
      <ToastContainer />
      <div    >

      </div>

      <Suspense fallback={<PageLoader/>}>
      <Switch>
        <Route exact path="/admin/login" component={Login} />
        <Route exact path="/admin/register" component={Register} />
        <Route exact path="/*" component={PageNotFound} />

      </Switch>
      </Suspense>


    </div>
  );
}
export default AdminRoute;