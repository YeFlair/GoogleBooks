const mockAxios = require('axios');
const search_keyword = require('../../utility/search_keyword');
const fake_id_response = require('../../__fixtures__/fake_id_response');

describe('search_keyword.js', () => {
  it('calls Google Books API and returns books', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve(fake_id_response)
    );
    const keyword = 'dance';
    const books = await search_keyword(keyword);

    expect(books).toEqual(fake_id_response);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(
      'https://www.googleapis.com/books/v1/volumes?q=dance&printType=books&startIndex=0&maxResults=5&projection=lite'
    );
  });

  it('throws an error if a keyword is not inputted by user', async () => {
    const error = await search_keyword();
    expect(error.name).toBe('Error');
    expect(error.message).toMatch(/Your search phrase returned undefined./);
  });

  it('throws an error if a keyword is not received as a string', async () => {
    const error = await search_keyword(true);
    expect(error.name).toBe('Error');
    expect(error.message).toMatch(/Your search phrase returned undefined./);
  });
});