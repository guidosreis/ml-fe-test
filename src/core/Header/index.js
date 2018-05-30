import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import './styles.css'
import logo from './logo.png'

export class Header extends Component {
  constructor(props) {
    super(props)

    this.handleSearch = this.handleSearch.bind(this)

    this.state = {
      redirect: false
    }
  }

  handleSearch(event) {
    event.preventDefault()
    const q = this.refs.searchInput.value

    this.setState({
      redirect: `results?q=${q}`
    })
  }

  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="row justify-content-lg-center">
            <div className="col col-lg-10">
              <div className="nav">
                <img src={logo} alt="Mercado Livre" />
                <form className="search-bar" onSubmit={this.handleSearch}>
                  <div className="input-group">
                    <input
                      type="seach"
                      className="form-control"
                      placeholder="Nunca deixe de buscar"
                      ref="searchInput"
                    />
                    <div className="input-group-append">
                      <button type="submit" className="btn btn-secondary">
                        <i className="fa fa-search" />
                      </button>
                    </div>
                  </div>
                  {
                    this.state.redirect &&
                    <Redirect push to={this.state.redirect} />
                  }
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
