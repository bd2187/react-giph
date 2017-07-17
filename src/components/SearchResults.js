import React from 'react'

function Giph({giph}) {
  const { embed_url } = giph
  return (
    <li>
      <a href={embed_url}>
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
