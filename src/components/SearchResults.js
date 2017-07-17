import React from 'react'
// import { Link } from 'react-router-dom';

function Giph({giph}) {
  return (
    <li>
      <a href={giph.embed_url} target="_blank">
        <img src={giph.images.fixed_height.url} alt=""/>
      </a>
    </li>
  );
}

function checkGiphsLength(giphs) {
  if (giphs.length > 0) {
    return (
      <ul>
          {giphs.map(function(giph){
            return <Giph giph={giph} key={giph.id}/>
          })}
      </ul>
    )
  } else {
    return <p> Sorry, no giphs found</p>
  }

}

function SearchResults ({giphs, error, isFetching}) {
  return (
    <div className="searchResults">
      { (isFetching)
        ? "Loading"
        : checkGiphsLength(giphs)
      }

      { error && <h1>{error.toString()}</h1> }

    </div>
  )
}

export default SearchResults;
