import React, { Component } from 'react'
import axios from 'axios'

import Breadcumb from '../../core/Breadcumb'
import ProductCard from '../../core/ProductCard'

export class Product extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      product: null,
      description: null
    }

    this.id = props.match.params.id
    this.getProduct()
  }

  async getProduct() {
    const url = `https://api.mercadolibre.com/items/${this.id}`
    const urlDescription = `https://api.mercadolibre.com/items/${this.id}/description`

    try {
      const productResp = await axios.get(url)
      const descriptionResp = await axios.get(urlDescription)

      this.setState({
        product: productResp.data,
        description: descriptionResp.data
      })
    } catch (error) {
      // tratar erro
    } finally {
      this.setState({loading: false})
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-lg-center">
          <div className="col col-lg-10">
            <Breadcumb />
            { this.state.loading && <p>Carregando...</p> }
            { !!this.state.product && 
              <ProductCard
                product={this.state.product}
                description={this.state.description}
              />
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Product
