import React, { useState } from "react";
import './productPage.css'
import productData from '../assets/data';
import Item from '../components/Items';
import Filters from "../components/Filters";
const Product = () => {

  const [filters, setFilters] = useState({
    price: 0
  })
  const [products, setProducts] = useState(productData)

  const handleFilterChange = (key, val) => {
    setFilters({ ...filters, [key]: val })
  }

  const applyFilter = () => {
    let prds = productData.filter(obj => {
      console.log(obj.price, filters.price);
      return obj.price <= filters.price
    })
    console.log(prds);
    setProducts(prds)
  }
  return (
    <div className="products">
      <h1>POPULAR</h1>
      <hr />
      <Filters
        handleFilterChange={handleFilterChange}
        value={filters}
        applyFilter={applyFilter}
      />
      <div className="product-item">
        {products.length > 0 ?
          products.map((value, i) => {
            return <Item title={value.title} imageUrl={value.imageUrl} price={value.price} />
          })
          :
          <p className="err-msg">Uh oh. no matches. try other filters :)</p>
        }
      </div>

    </div>
  )
}
export default Product