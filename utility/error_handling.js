module.exports = (error, spinnerInstance) => {
    try {
      if (!error && !spinnerInstance) {
        throw new Error(
          'Sorry, the errorHandle function needs to be passed an error and a spinnerInstance.'
        );
      } else if (!spinnerInstance) {
        throw new Error("Sorry, there's been an error with the Spinner");
      }
      spinnerInstance.stop();
      throw new Error(error);
    } catch (error) {
      console.error(error);
      return error;
    }
  };