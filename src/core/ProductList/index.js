import React from 'react'
import PropTypes from 'prop-types'

const ProductList = ({ products }) => {
  return (
    <React.Fragment>
      {products.map(product => <Product product={product} />)}
    </React.Fragment>
  )
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired
}

export default ProductList
