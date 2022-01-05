const fs = require('fs');
const flash_spinner = require('./flash_spinner');
const search_bookid = require('./search_bookid');

module.exports = async id => {
  await flash_spinner();
  try {
    const book = await search_bookid(id);

    const bookData = `\nTitle: ${book.data.volumeInfo.title}\nAuthor(s): ${book.data.volumeInfo.authors}\nPublisher: ${book.data.volumeInfo.publisher}\n`;

    await fs.appendFile('reading-list.txt', bookData, err => {
      if (err) {
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