import React, { Component } from 'react'
import axios from 'axios'

import {formatPrice, formatPriceCents} from '../../utils/formatPrice'
import Breadcumb from '../../core/Breadcumb'
import Button from '../../core/Button'

export class Product extends Component {
  constructor(props) {
    super(props)

    this.state = {
      product: null,
      description: null
    }

    this.id = props.match.params.id
    this.getProduct()
  }

  async getProduct() {
    const url = `https://api.mercadolibre.com/items/${this.id}`
    const urlDescription = `https://api.mercadolibre.com/items/${this.id}/description`
    let productResp
    let descriptionResp

    try {
      productResp = await axios.get(url)
      descriptionResp = await axios.get(urlDescription)

      this.setState({
        product: productResp.data,
        description: descriptionResp.data
      })
    } catch (error) {
      // tratar erro
    }
  }

  render() {
    const { product, description } = this.state;
    return (
      <div className="container">
        <div className="row justify-content-lg-center">
          <div className="col col-lg-10">
            <Breadcumb />
            <div className="product-card">
              { !!product && 
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
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Product
