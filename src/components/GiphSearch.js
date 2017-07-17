import React, { Component } from 'react';
import SearchResults from './SearchResults';
import Nav from './Nav';
import api from '../utils/api';

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
    this.fetchGiphs("search", val)
  }

  render() {
    const { giphs, isFetching, error } = this.state;
    console.log(this.state);
    return (
      <div className="giphSearch">
        <Nav updateSearch={this.updateSearch}/>
        <SearchResults
          giphs={giphs}
          isFetching={isFetching}
          error={error}/>
      </div>
    )
  }
}
