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

  componentDidMount() {
    api()
    .then((giphs) => this.setState({
      giphs,
      isFetching: false
    }))
    .catch((err) => this.setState({
      isFetching: false,
      error: err
    }))
  }

  updateSearch = (val) => {
    this.setState({search: val});
  }

  render() {
    const { giphs, isFetching, error } = this.state;
    console.log(this.state.search);
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
