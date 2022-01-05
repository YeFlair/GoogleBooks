module.exports = async (args, cb, spinnerInstance) => {
    try {
      if (!cb) {
        throw new Error('Incorrect callback function passed to list command.');
      } else if (!spinnerInstance) {
        throw new Error('Error with spinner.');
      }
      spinnerInstance.start();
      await cb();
      spinnerInstance.stop();
    } catch (error) {
      if (!spinnerInstance) {
        console.error(error);
        return error;
      }
      spinnerInstance.stop();
      console.error(error);
      return error;
    }
  };