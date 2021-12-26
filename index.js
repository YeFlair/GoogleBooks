const minimist = require('minimist');
const { version } = require('./package.json');
const keywordSearch = require('./util/search_keyword');
const search_keyword = require('./utils/search_keyword');
const printReadingList = require('./utils/printReadingList');

module.exports = () => {
    const args = minimist(process.argv.slice(2));
    let command = args._[0] || 'menu';
  
    if (args.help || args.h) {
      command = 'menu';
    }
  
    if (args.version || args.v) {
      command = 'version';
    }
  
    switch (command) {
      case 'search_book':
        require('./commands/search_book')(args, searchUsingKeyword);
        break;
      case 'save':
        require('./commands/save_book')(args);
        break;
      case 'list':
        require('./commands/list')(args, printReadingList);
        break;
      case 'help':
        require('./commands/menu')(args);
        break;
      case 'version':
        require('./commands/version')(args, version);
        break;
      default:
        console.error(
          `Sorry, "${command}" is not a valid command. Please type 'books-cli help' to see the help menu.`
        );
        break;
    }
  };