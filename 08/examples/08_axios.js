const axios = require('axios');

axios.get('/user?ID=12345')
.then((response) => {
  console.log(response);
})
.catch((error) => {
  console.log(error);
});
