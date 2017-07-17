import React, { Component } from 'react';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
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
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Search Giphs..."
          autocomplete="off"/>
        <input
          type="submit"
          value="Search"
          disabled={!this.state.value}/>
      </form>
    )
  }
}

export default Nav;
