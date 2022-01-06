const mockAxios = require('axios');
const search_bookid = require('../../utility/search_bookid');
const fake_id_response = require('../../__fixtures__/fake_id_response');

describe('search_bookid.js', () => {
  it('calls Google Books API using an ID and returns one book', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve(fake_id_response)
    );
    const id = 'bUcdDgAAQBAJ';
    const book = await search_bookid(id);

    expect(book).toEqual(fake_id_response);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(
      'https://www.googleapis.com/books/v1/volumes/bUcdDgAAQBAJ'
    );
  });

  it('throws an error if book ID is not passed', async () => {
    const error = await search_bookid();
    expect(error.name).toBe('Error');
    expect(error.message).toBe('Incorrect book ID input');
  });

  it('throws an error if book ID is not a string', async () => {
    const error = await search_bookid(true);
    expect(error.name).toBe('Error');
    expect(error.message).toBe('Incorrect book ID input');
  });
});