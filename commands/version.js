module.exports = (args, version) => {
    try {
      if (!version) {
        throw new Error('Sorry, the current version cannot be found.');
      }
      console.log(`This is version ${version}.`);
      return version;
    } catch (error) {
      console.error(error);
      return error;
    }
  };