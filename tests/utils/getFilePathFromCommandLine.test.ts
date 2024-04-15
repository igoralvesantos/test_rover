import getFilePathFromCommandLine from '../../src/utils/getFilePathFromCommandLine';

describe('getFilePathFromCommandLine', () => {
  it('should return command line argument when provided', () => {
    const mockArgv = ['node', 'script.js', 'mockFilePath'];
    process.argv = mockArgv;

    const result = getFilePathFromCommandLine();

    expect(result).toEqual('mockFilePath');
  });

  it('should return default file path when no command line argument is provided', () => {
    const mockArgv = ['node', 'script.js'];
    process.argv = mockArgv;

    const result = getFilePathFromCommandLine();

    expect(result).toEqual('../../file_example/mars_exploration.txt');
  });
});
