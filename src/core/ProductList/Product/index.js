import React from 'react'
import PropTypes from 'prop-types'

import formatPrice from '../../../utils/formatPrice'

const Product = ({ product }) => (
  <article className="product">
    <figure className="product__thumb">
      <img src={product.thumbnail} alt={product.title} />
    </figure>
    <div className="product__info">
      <span className="product__info__price">
        $ {formatPrice(product.price)}
      </span>
      <p className="product__info__title">
        {product.title}
      </p>
    </div>
    <span className="address">
      {product.address.state_name}
    </span>
  </article>
)

Product.propTypes = {
  product: PropTypes.object.isRequired
}

export default Product
