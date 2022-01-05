const axios = require('axios');
const flash_spinner = require('./flash_spinner');

module.exports = async id => {
  await flash_spinner();
  try {
    if (!id || typeof id !== 'string') {
      throw new Error('Incorrect book ID input');
    }
    const results = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${id}`
    );
    return results;
  } catch (error) {
    if (error.message === 'Request failed with status code 503') {
      throw new Error(
        "Sorry, there's been a problem. Most likely, you have used a book ID that could not be found on the Google Books database. Check that your ID is correct and try again."
      );
    }
    console.error(error);
    return error;
  }
};