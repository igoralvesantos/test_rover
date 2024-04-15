# TEST_ROVER

### Sobre

Projeto realizado como teste para a vaga de Backend Pleno na empresa Foxbit.

### Pré-requisitos

Para rodar este projeto, você precisa ter o Node.js na versão **v20.12.2** instalado na sua máquina.

### Rodando o projeto
Antes de rodar o projeto é necessário instalar as dependencias com o comando ```npm install```.
Para rodar o projeto na versão de desenvolvimento basta rodar o comando ```npm run dev``` e para executar na versão de produção basta rodar o comando ```npm start```.

### Rodando os teste
Para rodar os testes basta rodar o comando ```npm run test```.

### Arquitetura
A arquitetura utilizada foi baseada na clean archtecture e ficou com a sequintes estruturas.
```
├── file_example/
│   └── mars_exploration.txt
├── src/
│   ├── entities/
│   │   ├── Coordinates.ts
│   │   ├── Plateau.ts
│   │   ├── Position.ts
│   │   └── Rover.ts
│   ├── infrastructure/
│   │   └── NodeFileReader.ts
│   ├── services/
│   │   └── RoverNavigationService.ts
│   ├── use_cases/
│   │   └── MarsPlateauExplorationUseCase.ts
│   ├── utils/
│   │   └── getFilePathFromCommandLine.ts
│   └── index.ts
├── test/
│   ├── entities/
│   │   ├── Coordinates.test.ts
│   │   ├── Plateau.test.ts
│   │   ├── Position.test.ts
│   │   └── Rover.test.ts
│   ├── infrastructure/
│   │   └── NodeFileReader.test.ts
│   ├── services/
│   │   └── RoverNavigationService.test.ts
│   ├── use_cases/
│   │   └── MarsPlateauExplorationUseCase.test.ts
│   ├── utils/
│   │   └── getFilePathFromCommandLine.test.ts
├── package.json
├── package-lock.json
└── tsconfig.json
```
