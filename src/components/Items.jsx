import React from 'react';
import './items.css'
// import productData from '../assets/data';
const Items = ({ props }) => {
  return (
    <div className='item'> 
      <img src={props.imageUrl} alt={props.title} />
      <p>{props.title}</p>
      <div className='item-prices'>
        {props.price}
        
      </div>
        </div>
      )
  }
   
       
    
   


export default Items;
