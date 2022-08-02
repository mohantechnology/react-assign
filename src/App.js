import React from 'react';
import { Route, Switch, Redirect  , BrowserRouter } from "react-router-dom"; 
import PageNotFound from "./component/PageNotFound";
import AdminRoute from "./routes/AdminRoute";






function App() {
  return (
    <div  >
      <BrowserRouter>
      <Switch>
          <Route exact path="/admin/*" component={AdminRoute}  />
          <Route exact path="/*" component={PageNotFound}  />
          {/* <Route exact path="/*" element={<PageNotFound />} /> */}
          </Switch>
          </BrowserRouter>
    </div>
  );
}

export default App;


