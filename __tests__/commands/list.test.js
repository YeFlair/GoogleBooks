const list = require('../../commands/list');
const Spinner = require('../../utility/spinner');

describe('list.js', () => {
  it('throws an error if a function has not been passed to the list command', async () => {
    const spinnerInstance = new Spinner();
    const error = await list('list', undefined, spinnerInstance);
    expect(error.name).toBe('Error');
    expect(error.message).toBe(
      'Incorrect callback function passed to list command.'
    );
  });

  it('throws an error if a spinner has not been passed to the list command', async () => {
    const reading_list = jest.fn(() => true);
    const error = await list('list', reading_list, null);
    expect(error.name).toBe('Error');
    expect(error.message).toBe('Error with spinner.');
  });
});