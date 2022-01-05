const error_handling = require('./error_handling');
module.exports = async (cb, spinnerInstance) => {
  try {
    if (!cb) {
      throw new Error('Incorrect callback function passed to command.');
    } else if (!spinnerInstance) {
      throw new Error();
    }
    return;
  } catch (error) {
    return error_handling(error, spinnerInstance);
  }
};