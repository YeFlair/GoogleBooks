const flash_spinner = require('../../utility/flash_spinner');

test('waits 1 seconds before showing response', () => {
  jest.useFakeTimers();
  flash_spinner();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});