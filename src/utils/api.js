import axios from 'axios';

export default function api(type = "trending", val = null) {
  let endpoint;

  if (type === "trending") {
    endpoint = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=50";
  }
  else if (type === "search") {
    endpoint =`http://api.giphy.com/v1/gifs/search?q=${val}&api_key=dc6zaTOxFJmzC&limit=50`;
  }

  return axios.get(endpoint)
          .then( (res) => res.data.data )
}
