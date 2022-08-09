import React, { useState, useEffect  } from "react";
import { Route, Switch, NavLink, useLocation ,useHistory} from "react-router-dom";
// import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import {
//   Input,
// } from "reactstrap"
import { productList } from "./products/Product";

import { AutoComplete, Input } from "antd";
import "./Navbar.css";

export default function () {
  const [options, setOptions] = useState([]); 
  const history = useHistory();

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value,item) => {
 
    history.push(item.link); 
     
  };

  return (
    <div className="ad-nvb-mn-bx">
      
      <div className="ad-nvb-at-cmp-bx">
        <AutoComplete
          dropdownMatchSelectWidth={252}
          style={{
            width: "100%",
          }}
          options={options}
          onSelect={onSelect}
          onSearch={handleSearch}
        >
          <Input.Search size="medium" placeholder="Search Items" enterButton />
        </AutoComplete>
      </div>


      <div className="ad-nvb-prof-bx">
                 <AccountCircleIcon style={{fontSize:"40px"}}/>
                 <div className="ad-nvb-prof-tl"> Admin  </div>
    </div>
    </div>
  );
}

const getRandomInt = (max, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query) => {
  let itemList  ;
  try{
   itemList = testOption.filter((item) => {
      // console.log(item)
      return item.label.search(new RegExp(query, "i")) >= 0;
    });
  }
  catch(err){
    console.error(err); 
    return [] ;
  }


  // console.log( itemList);
  
   itemList.map( (item,idx)=>{

    // item.label = <NavLink className="ad-nvlk" style={{color:"black"}} exact to={item.link }> {item.label}sdf ds </NavLink> 
   });
   return itemList;
};

// const testOption = [
//   { value: "some value2", label: "some label2" },
//   { value: "some value3", label: "some label3" },
//   { value: "some value4", label: "some label4" },
//   { value: "some value5", label: "some label5" },
//   { value: "some value6", label: "some label6" },
// ];

// let str=" "; 
const testOption = productList.map((item,idx)=>{
  item.link = "/admin/dashboard/product/full-description?id=" + item._id;

  item.label =  item.title  ; 
  item.value =   item.title   ; 
  // item.value =  item._id;
  return item ; 
})

console.log("testOption" )
console.log(testOption )
// export default App;
