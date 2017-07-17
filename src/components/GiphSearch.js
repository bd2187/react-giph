import React, { Component } from 'react';
import SearchResults from './SearchResults';
import Nav from './Nav';
import api from '../utils/api';

export default class GiphSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      giphs: [],
      isFetching: true,
      error: ''
    }
  }

  componentDidMount() {
    api();
  }
  render() {
    return (
      <div className="giphSearch">
        <Nav />
        <SearchResults />
      </div>
    )
  }
}
