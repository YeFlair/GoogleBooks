const ora = require('ora');

class Spinner {
  constructor() {
    this.options = { spinner: 'dots12', color: 'magenta' };
    this.instance = ora(this.options);
  }

  start = () => this.instance.start();
  stop = () => this.instance.stopAndPersist();
}

module.exports = Spinner;