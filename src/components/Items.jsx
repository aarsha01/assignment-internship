import React from 'react';
import './items.css'
// import productData from '../assets/data';
const Items = (props) => {
  return (
    <div className='item'>
      <div className="img-box">
        <img src={props.imageUrl} alt={props.title} />
      </div>
      <div className="content-box">
        <p className='item-name'>{props.title}</p>
        <p className='item-price'>{props.price}</p>
      </div>
    </div>
  )
}






export default Items;
