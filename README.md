# Daryl Corbin: Revision
This is a command line application that allows user to search / save books to a reading list.

## Instructions:
### **These instructions assume you have already downloaded [Git](https://git-scm.com/downloads) and [Node](https://nodejs.org/en/) with a basic understanding of [the command line](https://www.codecademy.com/articles/command-line-commands).**

1. Open terminal application and clone the following repository into a location of your choosing:
    
    `git clone https://github.com/YeFlair/GoogleBooks`

2. Navigate into the GoogleBooks folder.
    
    `cd GoogleBooks`

3. Install GoogleBooks
    
    `npm i` or `npm install`

4. Run `npm link` to allow `books-cli` to be accessible throughout this project. `books-cli` is required to start each command inside the program.



5. ### Search command

    `books-cli search --keyword yourKeywordHere`

    books-cli command followed by `--keyword` flag and a search phrase returns five books related to your query.

    If your seach term is one word you can use without quotation marks; if your search is made up of multiple words, quotation marks are required

    For example:
    `books-cli search --keyword dogs`

    or

    `books-cli search --keyword 'dog diets'`

    Your results will contain five books, including a title, author and publisher, as well as a unique ID.

    If you would like to save a book to your reading list, you will need to use that ID.

6. ### Save command

    `books-cli save --id`

    After you've made a search, select and copy the ID of the book you'd like to save to your reading list.

    On a Mac, you can highlight the ID and copy it using the command `Command-C`. On a PC, use the command `Ctrl C`.

    Use the save command followed by a space and the ID of the book you'd like to save to your reading list.

    For example:
    `books-cli save --id PLcNhqWr7VcC`

    - This example command will save a book called _Dinner for Dogs_ by Henrietta Morrison to your reading list.

    7. ### List command

    `books-cli list`

    This command will print any books saved to your reading list to your console.

8. ### Help command

    `books-cli help` or `book-cli -h`

    This command displays a menu which lists available commands.

9. ### Version command

    `books-cli version` or `books-cli -v`

    This command displays the current verion of the programme.

10. ## Run Test

    To run tests, write the following command in your terminal:

    `npm test`
 
## Documentation:

https://timber.io/blog/creating-a-real-world-cli-app-with-node/

https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback

https://developers.google.com/books/docs/v1/using