const fs = jest.genMockFromModule('fs');

let mockFiles = Object.create(null);
const __setMockFiles = newMockFiles => {
  mockFiles = Object.create(null);
  for (const file in newMockFiles) {
    const dir = path.dirname(file);

    if (!mockFiles[dir]) {
      mockFiles[dir] = [];
    }
    mockFiles[dir].push(path.basename(file));
  }
};

fs.__setMockFiles = __setMockFiles;

module.exports = fs;