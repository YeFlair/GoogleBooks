const axios = require('axios'); // make HTTP requests from node

module.exports = async keyword => {
    try {
      if (
        !keyword ||
        keyword === undefined ||
        (keyword === true && keyword !== 'true')
      ) {
        throw new Error(`
        Error`);
      }
  
      const results = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${keyword}&printType=books&startIndex=0&maxResults=5&projection=lite`
      );
  
      return results;
    } catch (error) {
      if (error.message === 'Request failed with status code 503') {
        throw new Error(
          "Problem occured. Keyword entered could not be found. Make sure keyword is spelled correctly and try again."
        );
      }
      console.error(error);
      return error;
    }
  };