import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'
import Button from '../Button'
import {formatPrice, formatPriceCents} from '../../utils/formatPrice'

const ProductCard = ({ product, description }) => (
  <div className="product-card">
    <div className="row">
      <div className="col-8">
        <figure>
          <img src={product.pictures[0].secure_url} alt={product.title} />
        </figure>
      </div>
      <div className="col-4">
        <p className="product-status">
          {product.condition} - {product.sold_quantity} vendidos
        </p>
        <h1 className="product-name">{product.title}</h1>
        <h2 className="product-price">
          $ {formatPrice(product.price)}
          <small>{formatPriceCents(product.price, true)}</small>
        </h2>
        <Button />
      </div>
      <div className="col-12">
        <h3>Descripción del produto</h3>
        {description.plain_text.split("\n").map((item, i) => (
          <p className="mb-0" key={i}>{item}</p>
        ))}
      </div>
    </div>
  </div>
)

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired
}

export default ProductCard
