const menus = {
    main: `
      book-cli [command] <options>
        search .............. search for book using and keyword powered by Google's API. should Cheeese be paired with a --keyword flag and a search phrase
        save ................ save a book to a reading list. Should be paired with the --id flag and the ID of a book you'd like to save.
        list................. view your reading list 
        version ............ show package version
        help ............... show help menu for a commands`,
  
    search: `
      book-cli search <options>
  
      books-cli search <options>
      --keyword.....the keyword you want to search`,

    save:  `
      book-cli save <options>
      --id......the ID of the book you'd like to save to your reading list`
  }
  
  module.exports = (args) => {
    const subCmd = args._[0] === 'help'
      ? args._[1]
      : args._[0]
  
    console.log(menus[subCmd] || menus.main)
  }