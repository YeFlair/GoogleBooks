const error_handling = require('./error_handling');

module.exports = (keyword, books) => {
  try {
    console.log(
      `\n
    _____________________________________________________________
    \n
    You searched for: "${keyword}". \n
    Here are five books related to your search. \n \n \n
    If you are interested in saving a book to your reading list, \n
    copy its listed ID and use the following command to save that book to your reading list. \n
    Remember that you need to replace the last word in the command with the ID of the book you'd like to save. \n \n
    books\-cli save --id replaceThisWithYourBookID
    
    _____________________________________________________________
    `
    );
    books.data.items.forEach(book => {
      console.log(`
    Title: ${book.volumeInfo.title}
    Author(s): ${book.volumeInfo.authors}
    Publisher: ${book.volumeInfo.publisher}
    ID: ${book.id}
    ____________________________________________
    `);
    });
    return;
  } catch (error) {
    error_handling(error);
  }
};