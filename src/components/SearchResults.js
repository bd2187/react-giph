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

function SearchResults ({giphs, error, isFetching}) {
  return (
    <div className="searchResults">
      { isFetching && "Loading" }

      { error === ''
        ? <ul>
            {giphs.map(function(giph){
              return <Giph giph={giph} key={giph.id}/>
            })}
          </ul>
        : <h1>{error}</h1>
      }
    </div>
  )
}

export default SearchResults;
