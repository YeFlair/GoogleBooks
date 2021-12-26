const addBookToReadingList = require('../util/addBookToReadingList.js');

module.exports = async args => {

  try {
    const id = args.id || args._1;
    const saveBook = await addBookToReadingList(id);
    console.log(
      `\n
      _____________________________________________________________
      \n
      You have successfully saved "${saveBook.data.volumeInfo.title}" to your reading list! \n
      Title: ${saveBook.data.volumeInfo.title}
      Author(s): ${saveBook.data.volumeInfo.authors}
      Publisher: ${saveBook.data.volumeInfo.publisher}
      ID: ${saveBook.data.id}
      _____________________________________________________________
      `
    );
  } catch (error) {
    console.error(error);
  }
};