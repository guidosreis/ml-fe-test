import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'
import Product from './Product'

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  )
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired
}

export default ProductList
