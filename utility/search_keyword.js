const axios = require('axios');
const flash_spinner = require('./flash_spinner');

module.exports = async keyword => {
  await flash_spinner();
  try {
    if (
      !keyword ||
      keyword === undefined ||
      (keyword === true && keyword !== 'true')
    ) {
      throw new Error(`
      _____________________________________________________________
      
      Your search phrase returned undefined.  
      Please ensure that you have used the --keyword flag and have followed it with a search term.
      Queries of more than one word should be wrapped in quotation marks.
      Your query should follow one of the following structures: 
      
      books-cli search --keyword word \n
      books-cli search --keyword "search phrase"
      
      Please try searching again.
      _____________________________________________________________`);
    }

    const results = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${keyword}&printType=books&startIndex=0&maxResults=5&projection=lite`
    );

    return results;
  } catch (error) {
    if (error.message === 'Request failed with status code 503') {
      throw new Error(
        "Sorry, there's been a problem. It's likely that you have used a keyword that could not be found on the Google Books database. Check that your keyword is spelled correctly and try again."
      );
    }
    console.error(error);
    return error;
  }
};