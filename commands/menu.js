const menus = {
    main: `
      books-cli [command] <options>
      search - search Google API for a book using a keyword. Should be paired with the --keyword flag and a search phrase.
      save - save a book to a reading list. Should be paired with the --id flag and the ID of a book you'd like to save.
      list - view your reading list
      version - show package version
      help - show help menu for a command`,
  
    search: `
      books-cli search <options>
      --keyword - the keyword you want to search`,
  
    save: `
      books-cli save <options>
      --id - the ID of the book you'd like to save to your reading list`
};
