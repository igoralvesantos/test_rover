import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

export interface IFileReader {
  readLines(filePath: string): AsyncIterable<string>;
}

class NodeFileReader implements IFileReader {
  async *readLines(filePath: string): AsyncIterable<string> {
    const fileStream = fs.createReadStream(path.resolve(__dirname, filePath), 'utf-8');
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    for await (const line of rl) {
      yield line;
    }
  }
}

export default NodeFileReader;
