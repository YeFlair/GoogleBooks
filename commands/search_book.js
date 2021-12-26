const printSearchResponse = require('../utils/printSearchList');

module.exports = async (args, searchUsingKeyword) => {
  try {
    const keyword = args.keyword || args._1;
    const books = await searc_Keyword(keyword);

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
      return printSearchResponse(keyword, books);
    }
  } catch (error) {
    return errorHandle(error);
  }
};