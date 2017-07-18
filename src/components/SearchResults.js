import React from 'react'
import NoneFound from './NoneFound';
import ErrorMessage from './ErrorMessage';

function Giph({giph}) {
  return (
    <li>
      <a className="giphLink" href={giph.embed_url} target="_blank">
        <img className="giph" src={giph.images.fixed_height.url} alt=""/>
      </a>
    </li>
  );
}

function checkGiphsLength (giphs, search) {
  return giphs.length > 0
    ? (<ul className="clearfix contain">
        {giphs.map(function(giph){
          return <Giph giph={giph} key={giph.id}/>
        })}
      </ul>)
    : <NoneFound search={search}/>
}

function SearchResults ({giphs, error, isFetching, search}) {
  return (
    <div className="searchResults">
      { (isFetching)
        ? "Loading"
        : checkGiphsLength(giphs, search)
      }

      { error && <ErrorMessage error={error} /> }
    </div>
  )
}

export default SearchResults;
