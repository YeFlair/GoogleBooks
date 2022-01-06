const error_handling = require('../../utility/error_handling');

describe('error_handling function', () => {
  it('returns an error if not passed a spinnerInstance', async () => {
    const error = { name: 'Error', message: "Sorry there's been a problem." };
    const error_handling_function = await error_handling(error);
    expect(error_handling_function.name).toBe('Error');
    expect(error_handling_function.message).toBe(
      "Sorry, there's been an error with the Spinner"
    );
    expect(typeof error_handling_function).toBe('object');
  });

  it('returns an error if not not passed an error or spinnerInstance', async () => {
    const error_handling_function = await error_handling();
    expect(error_handling_function.name).toBe('Error');
    expect(error_handling_function.message).toBe(
      'Sorry, the error_handling function needs to be passed an error and a spinnerInstance.'
    );
    expect(typeof error_handling_function).toBe('object');
  });

  it('returns an error if not passed an error', async () => {
    const spinnerInstance = { stop: () => true };
    const error_handling_function = await error_handling(undefined, spinnerInstance);
    expect(error_handling_function.name).toBe('Error');
  });
});