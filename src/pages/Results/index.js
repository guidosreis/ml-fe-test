import React, { Component } from 'react'
import queryString from 'query-string'
import axios from 'axios'

export class Results extends Component {
  constructor(props) {
    super(props)

    const parsed = queryString.parse(props.location.search)
    this.query = parsed.q
    if (!this.query) {
      // alert user that query is empty
    }

    this.state = {
      products: []
    }

    this.getProducts()
  }

  getProducts() {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${this.query}`

    axios.get(url).then(response => {
      const products = response.data.results.slice(0, 4)
      console.log('products: ', products)
      this.setState({products})
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>Results page</h1>
        {
          !!this.state.products.length &&
          this.state.products.map(product => (
            <div key={product.id}>
              {product.title}
            </div>
          ))
        }
      </React.Fragment>
    )
  }
}

export default Results
