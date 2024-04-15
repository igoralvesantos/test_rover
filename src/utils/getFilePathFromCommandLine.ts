function getFilePathFromCommandLine(): string {
  const defaultFilePath = "../../file_example/mars_exploration.txt";
  return process.argv[2] || defaultFilePath;
}

export default getFilePathFromCommandLine;
