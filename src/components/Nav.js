import React, { Component } from 'react';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  componentDidMount() {
    this.textInput.focus()
  }
  handleChange = (e) => {
    this.setState({value: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { value } = this.state;
    this.props.updateSearch(value);
    this.setState({value: ''});
  }
  render() {
    return (
      <form className="searchBar" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Search Giphs..."
          autoComplete="off"
          ref={(input) => this.textInput = input}/>
        <button className="searchBtn" disabled={!this.state.value}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    )
  }
}

export default Nav;
