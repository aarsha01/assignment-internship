// ProductDetail.js
import React from "react";
import './ItemDetails.css'; // Import your CSS file

const ProductDetail = ({ title, imageUrl, price, details }) => {
  return (
    <div className="product-detail">
      <h2 className="product-title">{title}</h2>
      <img className="product-image" src={imageUrl} alt={title} />
      <p className="product-price">Price: ${price}</p>
      <div className="product-details">{details}</div>
    </div>
  );
};

export default ProductDetail;
