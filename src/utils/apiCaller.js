import axios from 'axios';

export const callApi = (url, method = 'get', data) => {
  return axios({
    headers: { 'content-type': 'application/json' },
    method,
    url,
    data: JSON.stringify(data),
  })
    .then(response => {
      alert(
        `Form submitted successfully!\n${JSON.stringify(
          response.data,
          null,
          2
        )}`
      );
      return response.data;
    })
    .catch(error => {
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        alert(
          `Error!\nServer responded with status: ${error.response.status}\nCheck console for more info.`
        );
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request);
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
};
