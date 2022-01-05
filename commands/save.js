const Spinner = require('../utility/spinner');
const added_book = require('../utility/added_book.js');

module.exports = async args => {
  const spinnerInstance = new Spinner();
  spinnerInstance.start();

  try {
    const id = args.id || args._1;
    const saveBook = await added_book(id);
    spinnerInstance.stop();

    /**********************RESPONSE**************************/
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
    spinnerInstance.stop();
    console.error(error);
  }
};