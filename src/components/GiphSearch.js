import React, { Component } from 'react';
import SearchResults from './SearchResults';
import Nav from './Nav';
import api from '../utils/api';

import { Link } from 'react-router-dom'
export default class GiphSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      giphs: [],
      isFetching: true,
      error: ''
    }
  }

  fetchGiphs = (type, val) => {
    api(type, val)
    .then((giphs) => this.setState({
      giphs,
      isFetching: false
    }))
    .catch((err) => this.setState({
      isFetching: false,
      error: err
    }))
  }

  componentDidMount() {
    this.fetchGiphs("trending")
  }

  updateSearch = (val) => {
    this.setState({search: val, isFetching: true});
    this.fetchGiphs("search", val);
  }

  backToTrending = () => {
    this.fetchGiphs("trending");
  }

  render() {
    const { giphs, isFetching, error, search } = this.state;
    return (
      <div className="giphSearch">
        <header id="top contain">
          <Link className="homeLink" to="/" onClick={this.backToTrending}>
            Giphy
          </Link>
          <Nav updateSearch={this.updateSearch}/>
        </header>

        <SearchResults
          giphs={giphs}
          isFetching={isFetching}
          error={error}
          search={search}/>

        <a id="toTop" href="#top">
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </a>
      </div>
    )
  }
}
