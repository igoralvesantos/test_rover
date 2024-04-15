import MarsPlateauExplorationUseCase from "../../src/use_cases/MarsPlateauExplorationUseCase";
import FileReader from "../../src/infrastructure/NodeFileReader";

async function* asyncGenerator(array: string[]) {
  for (let item of array) {
    yield item;
  }
}

describe("MarsPlateauExplorationUseCase", () => {
  const fileReader = new FileReader();
  const useCase = new MarsPlateauExplorationUseCase("input.txt", fileReader);

  it("should create a plateau from the first line of the file", async () => {
    const mockFileContent = asyncGenerator(["5 5", "1 2 N", "LMLMLMLMM"]);
    jest.spyOn(fileReader, "readLines").mockReturnValue(mockFileContent);

    await useCase.executeExplorationFromFile();

    expect(useCase.plateau).toBeDefined();
    expect(useCase.plateau!.minCoordinates.x).toBe(0);
    expect(useCase.plateau!.minCoordinates.y).toBe(0);
    expect(useCase.plateau!.maxCoordinates.x).toBe(5);
    expect(useCase.plateau!.maxCoordinates.y).toBe(5);
  });

  it("should deploy and navigate rovers according to the file content", async () => {
    const mockFileContent = asyncGenerator([
      "5 5",
      "1 2 N",
      "LMLMLMLMM",
      "3 3 E",
      "MMRMMRMRRM",
    ]);
    jest.spyOn(fileReader, "readLines").mockReturnValue(mockFileContent);

    await useCase.executeExplorationFromFile();

    expect(useCase.explorationRovers.length).toBe(3);
    expect(useCase.explorationRovers[1].position.x).toBe(1);
    expect(useCase.explorationRovers[1].position.y).toBe(3);
    expect(useCase.explorationRovers[1].position.cardinalDirection).toBe("N");
    expect(useCase.explorationRovers[2].position.x).toBe(5);
    expect(useCase.explorationRovers[2].position.y).toBe(1);
    expect(useCase.explorationRovers[2].position.cardinalDirection).toBe("E");
  });
});
