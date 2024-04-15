import NodeFileReader from "../../src/infrastructure/NodeFileReader";

describe("NodeFileReader", () => {
  const fileReader = new NodeFileReader();

  it("should read lines from file", async () => {
    const exampleFilePath = "../../file_example/mars_exploration.txt";

    const lines: string[] = [];
    for await (const line of fileReader.readLines(exampleFilePath)) {
      lines.push(line);
    }

    expect(lines).toEqual(["5 5", "1 2 N", "LMLMLMLMM", "3 3 E", "MMRMMRMRRM"]);
  });
});
