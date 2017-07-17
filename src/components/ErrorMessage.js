import React from 'react';

function ErrorMessage ({error}) {
  return (
    <div>
      {error.toString()}
    </div>
  )
}

export default ErrorMessage;
