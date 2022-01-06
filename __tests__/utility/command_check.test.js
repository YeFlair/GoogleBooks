const command_check = require('../../utility/command_check');

describe('command_check.js', () => {
  it('throws an error if not passed a callback function', async () => {
    const spinnerInstance = { stop: () => {} };
    const check = await command_check(undefined, spinnerInstance);
    expect(check.name).toBe('Error');
    expect(check.message).toBe(
      'Error: Incorrect callback function passed to command.'
    );
  });

  it('throws an error if not passed a spinnerInstance', async () => {
    const cb = jest.fn();
    const check = await command_check(cb);
    expect(check.name).toBe('Error');
    expect(check.message).toBe("Sorry, there's been an error with the Spinner");
  });
});