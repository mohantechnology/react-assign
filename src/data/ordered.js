import  product from "./product";  
import  client from "./client";  
 
const data = [
  {
    productDetail: product.slice(0,2) ,
    clientDetail: client[0],
    createdAt: "23/01/1990",
    updatedAt: "24/01/1990",
   
    discountCode: "dis-1342" ,
    totalPrice: 0,
 
  },

  {
    productDetail: product.slice(2,5) ,
    clientDetail: client[1],
    createdAt: "23/01/1990",
    updatedAt: "24/01/1990",
   
    discountCode:  "null" ,
    totalPrice: 0,
 
  },
  {
    productDetail: product.slice(4,6) ,
    clientDetail: client[2],
    createdAt: "2/01/1990",
    updatedAt: "23/01/1990",
   
    discountCode:  "lamen-1423" ,
    totalPrice: 0,
 
  },

]


 
data.map((item )=>{ 

  item.productDetail.map((product )=>{ 
    item.totalPrice += (product.discountPercentage * product.price)/100; 
   })
    ; 
})


export default   data ;  



