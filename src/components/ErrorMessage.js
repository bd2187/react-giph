import React from 'react';

function ErrorMessage ({error}) {
  return (
    <div className="errorMessage">
      {error.toString()}
    </div>
  )
}

export default ErrorMessage;
