import React, { useState, useEffect, Suspense } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
// import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PageNotFound from "../component/PageNotFound";
import Login from "../admin/auth/Login";
import Register from '../admin/auth/Register';



import 'react-toastify/dist/ReactToastify.css';
// import './AdminRoute.css';

 


function AdminRoute() {
  // alert( "inside app-admin") ; 
  let instruct_img_url;
  return (
    <div className="app-page">
      <ToastContainer />
      <div    >

      </div>


      <Switch>
        <Route exact path="/admin/login" component={Login} />
        <Route exact path="/admin/register" component={Register} />
        <Route exact path="/*" component={PageNotFound} />

      </Switch>



    </div>
  );
}
export default AdminRoute;