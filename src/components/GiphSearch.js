import React, { Component } from 'react';


function Nav (props) {
  return (
    <form>
      <input
        type="text"
        value=""/>
      <input
        type="submit"
        value="Search"/>
    </form>
  )
}

export default class GiphSearch extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="giphSearch">
        <Nav />
      </div>
    )
  }
}
