// http request do api-to simulacija na response

const axios = require('axios');

axios.get('http://localhost:3000/hehe')
  .then( response => {
    // handle success
    console.log(response.data.messages);
  })
  .catch(error => {
    // handle error
    console.log(error);
  });


