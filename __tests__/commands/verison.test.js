const versionCommand = require('../../commands/version');
const { version } = require('../../package.json');

describe('list.js', () => {
  it('shows the current version of the app when called', async () => {
    const versionFunc = await versionCommand('version', version);
    expect(versionFunc).toBe(version);
  });

  it('throws an error, if no version is found', async () => {
    const versionError = await versionCommand('version');
    expect(versionError.name).toBe('Error');
    expect(versionError.message).toBe(
      'Sorry, the current version cannot be found.'
    );
  });
});