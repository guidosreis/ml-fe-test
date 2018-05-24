import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

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
      <form className="search-bar" onSubmit={this.handleSearch}>
        <input
          type="seach"
          className="seach-bar__input"
          placeholder="Nunca deixe de buscar"
          ref="searchInput"
        />
        <button type="submit" className="search-bar__button">
          <i className="fa fa-search" />
        </button>
        {
          this.state.redirect &&
          <Redirect push to={this.state.redirect} />
        }
      </form>
    )
  }
}

export default Header
