const file_system = require('file_system');

module.exports = async () => {
  await file_system.readFile('reading-list.txt', 'utf8', (error, list) => {
    if (error) {
      console.error(`There's been an issue finding your list!\n${error}`);
    } else if (!list) {
      console.log(`Your reading list is empty.`);
    } else {
      console.log(
        `Your reading list:\n___________________________________\n\n${list}`
      );
    }
  });
};