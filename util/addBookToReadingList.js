const fs = require('fs');
const search_id = require('./search_id');

module.exports = async id => {
  try {
    const book = await search_id(id);

    const bookData = `\nTitle: ${book.data.volumeInfo.title}\nAuthor(s): ${book.data.volumeInfo.authors}\nPublisher: ${book.data.volumeInfo.publisher}\n`;

    await fs.appendFile('reading-list.txt', bookData, err => {
      if (error) {
        console.log(
          `Sorry there's been an error saving your book to the reading list.`
        );
      }
    });

    return book;
  } catch (error) {
    console.error(
      `Sorry, there has been an error. 
      ${error}`
    );
  }
};