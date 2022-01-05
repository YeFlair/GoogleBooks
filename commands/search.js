const command_check = require('../utility/command_check');
const error_handling = require('../utility/error_handling');
const search_response = require('../utility/search_response');

module.exports = async (args, search_keyword, spinnerInstance) => {
  await command_check(search_keyword, spinnerInstance);
  await spinnerInstance.start();

  try {
    const keyword = args.keyword || args._1;
    const books = await search_keyword(keyword);
    spinnerInstance.stop();

    if (books.data.totalItems === 0) {
      throw new Error(`
      _____________________________________________________________
      
      There were no books that could be matched with that search phrase.  
      Please check your spelling and try again.
      Remember that your query should follow one of the following structures: 
      
      books-cli search --keyword word \n
      books-cli search --keyword "search phrase"
      
      _____________________________________________________________
      `);
    } else {
      return search_response(keyword, books);
    }
  } catch (error) {
    return error_handling(error, spinnerInstance);
  }
};