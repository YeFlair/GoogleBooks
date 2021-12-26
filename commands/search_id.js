const axios = require('axios');

module.exports = async id => {
  try {
    if (!id || typeof id !== 'string') {
      throw new Error('Error');
    }
    const results = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${id}`
    );
    return results;
  } catch (error) {
    if (error.message === 'Request failed with status code 503') {
      throw new Error(
        "Problem occured. ID entered could not be found. Make sure ID is correct and try again."
      );
    }
    console.error(error);
    return error;
  }
};