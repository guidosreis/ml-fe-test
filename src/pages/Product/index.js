import React, { Component } from 'react'
import axios from 'axios'

export class Product extends Component {
  constructor(props) {
    super(props)

    this.state = {
      product: null
    }

    this.id = props.match.params.id
    this.getProduct()
  }

  getProduct() {
    const url = `https://api.mercadolibre.com/items/${this.id}`

    axios.get(url).then(response => {
      const product = response.data
      this.setState({product})
    })
  }

  render() {
    const { product } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
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
                      {product.condition} - {product.sold_quantity} selled
                    </p>
                    <h1 className="product-name">{product.title}</h1>
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
