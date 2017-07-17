import React from 'react'

function SearchResults ({giphs, error, isFetching}) {
  console.log(error === "stuff")
  return (
    <div className="searchResults">
      { isFetching && "Loading" }

      { error === ''
        ? <ul>
            {console.log(giphs)}
          </ul>
        : <h1>error</h1>
      }
    </div>
  )
}

export default SearchResults;
