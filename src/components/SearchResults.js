import React from 'react'
import { Link } from 'react-router-dom';

function Giph({giph}) {
  return (
    <li>
      <Link to={giph.embed_url}>
        <img src={giph.images.fixed_height.url} alt=""/>
      </Link>
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
