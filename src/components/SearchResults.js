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
  console.log(error);
  return (
    <div className="searchResults">
      { (isFetching)
        ? "Loading"
        : <ul>
            {giphs.map(function(giph){
              return <Giph giph={giph} key={giph.id}/>
            })}
          </ul>
      }

      { error && <h1>{error.toString()}</h1> }

    </div>
  )
}

export default SearchResults;
