import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './styles.css'
import {formatPrice} from '../../../utils/formatPrice'

const Product = ({ product }) => (
  <Link to={`product/${product.id}`} className="product-link">
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
  </Link>
)

Product.propTypes = {
  product: PropTypes.object.isRequired
}

export default Product
