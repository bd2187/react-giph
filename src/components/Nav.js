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
  render() {
    console.log(this.state.value);
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}/>
        <input
          type="submit"
          value="Search"/>
      </form>
    )
  }
}

export default Nav;
