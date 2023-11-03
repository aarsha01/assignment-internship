import React, { useState } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

function Filters({ handleFilterChange, applyFilter ,value }) {


  const handleChange = (val) => {
    handleFilterChange('price',val)
  }
  return (
    <div className="filters-top">
      <div className="filters-head">
        <p>Filters</p>
        <hr />
      </div>
      <div className="priceFilter">
          <div className="priceFilter-meta">
            <p className='filter-name'>Price</p>
            <input type="text" value={value.price} disabled/>
          </div>
          <Slider
            min={0}
            max={500}
            onChange={handleChange}
            onChangeComplete={applyFilter}
            value={value.price}
            labels={{ 0: 'Low', 250: 'Medium', 500: 'High' }}
          />
        </div>
    </div>
  )
}

export default Filters