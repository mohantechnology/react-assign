import React from 'react';
import { Route, Switch, Redirect  , BrowserRouter } from "react-router-dom"; 
import PageNotFound from "./component/PageNotFound";
import AdminRoute from "./routes/AdminRoute";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';


function App() {
  return (
    <div  > 
      <BrowserRouter>
      <Switch>
          {/* */}
          <Route exact path="/admin/*" component={AdminRoute}  />

          <Redirect exact path="/" to="/admin/dashboard/statistic"  /> 
          <Route exact path="/*" component={PageNotFound}  />
          {/* <Route exact path="/*" element={<PageNotFound />} /> */}
          </Switch>
          </BrowserRouter>
    </div>
  );
}

export default App;


