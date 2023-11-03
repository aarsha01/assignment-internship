import React from "react";
import './productPage.css'
import productData from '../assets/data';
import Item from '../components/Items';
const Product=()=>{
  return(
    <div className="product">
      <h1>POPULAR</h1>
      <hr />
      <div className="product-item">
       {
        productData.map((value, i)=>{
          return <Item  title={value.title} imageUrl={value.imageUrl} price={value.price}/>
        })
       }
      </div>

    </div>
  )
}
export default Product