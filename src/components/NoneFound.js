import React from 'react';

function NoneFound({search}) {
  return (
    <div className="noneFound">
      <h1>Sorry, no results found for {search} </h1>
    </div>
  )
}

export default NoneFound;
