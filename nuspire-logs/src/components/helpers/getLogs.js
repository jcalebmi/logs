const axios = require('axios');

const getLogs = (option) => {
  if(option && option !== "all") {
    return axios.get(`https://3aeo8yc8m8.execute-api.us-east-2.amazonaws.com/default/mysqlGet/?option=${option}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log('ERROR: ', err);
    });
  } else {
    return axios.get('https://3aeo8yc8m8.execute-api.us-east-2.amazonaws.com/default/mysqlGet')
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log('ERROR: ', err);
    });
  }
}

export default getLogs;