const fs = jest.genMockFromModule('file_system');

// This function creates a mock filesystem
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

module.exports = file_system;