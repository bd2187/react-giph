import axios from 'axios';

export default function api() {
  const endpoint = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=50";

  return axios.get(endpoint)
          .then( (res) => console.log(res.data.data) )
}
