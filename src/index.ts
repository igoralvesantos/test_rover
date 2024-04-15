import NodeFileReader from './infrastructure/NodeFileReader';
import ExploreMarsUseCase from './use_cases/MarsPlateauExplorationUseCase';
import getFilePathFromCommandLine from './utils/getFilePathFromCommandLine';

const filePath = getFilePathFromCommandLine();
const fileReader = new NodeFileReader();

const useCase = new ExploreMarsUseCase(filePath, fileReader);
useCase.executeExplorationFromFile();
