import Plateau from '../entities/Plateau';
import Position, { CardinalDirections } from '../entities/Position';
import Rover from '../entities/Rover';
import RoverNavigationService, { Commands } from '../services/RoverNavigationService';
import { IFileReader } from '../infrastructure/NodeFileReader';
import Coordinates from '../entities/Coordinates';

class MarsPlateauExplorationUseCase {
  private inputFilePath: string;
  private fileReader: IFileReader;
  private _plateau?: Plateau;
  private _explorationRovers: Rover[] = [];

  constructor(inputFilePath: string, fileReader: IFileReader) {
    this.inputFilePath = inputFilePath;
    this.fileReader = fileReader;
  }

  get plateau(): Plateau | undefined {
    return this._plateau;
  }

  set plateau(value: Plateau) {
    this._plateau = value;
  }

  get explorationRovers(): Rover[] {
    return this._explorationRovers;
  }

  set explorationRovers(value: Rover[]) {
    this._explorationRovers = value;
  }

  private createPlateau(line: string) {
    const [maxX, maxY] = line.split(' ').map(Number);
    const minCoordinates = new Coordinates(0, 0);
    const maxCoordinates = new Coordinates(maxX, maxY);

    this.plateau = new Plateau(minCoordinates, maxCoordinates);
  }

  private deployRover(line: string) {
    const [x, y, direction] = line.split(' ');

    const position = new Position(Number(x), Number(y), direction as CardinalDirections);
    const rover = new Rover(position);

    this.explorationRovers.push(rover);
    return rover;
  }

  private navigateRover(rover: Rover, line: string) {
    const commands = line.split('') as Commands[];

    if (!this.plateau) {
      throw new Error('plateau not found: A plateau must exist for exploration.');
    }

    const navigationService = new RoverNavigationService(rover, this.plateau);

    commands.forEach((command) => {
      navigationService.executeCommand(command);
    });
  }

  async getAllLinesFromFile() {
    const lines = [];
    for await (const line of this.fileReader.readLines(this.inputFilePath)) {
      lines.push(line);
    }
    return lines;
  }

  private createPlateauFromFirstLine(firstLine: string) {
    this.createPlateau(firstLine);
  }

  private deployAndNavigateRovers(lines: string[]) {
    for (let i = 1; i < lines.length; i += 2) {
      const rover = this.deployRover(lines[i]);
      this.navigateRover(rover, lines[i + 1]);
    }
  }

  private printRoversPositions() {
    this.explorationRovers.forEach((rover) => {
      console.log(rover.position.formattedPositionString);
    });
  }

  async executeExplorationFromFile() {
    try {
      const lines = await this.getAllLinesFromFile();

      this.createPlateauFromFirstLine(lines[0]);
      this.deployAndNavigateRovers(lines);
      this.printRoversPositions();
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log('An unknown error occurred during execution.');
      }
    }
  }
}

export default MarsPlateauExplorationUseCase;
