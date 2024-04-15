# Documentação

## Introdução

Essa documentão é parte do teste para vaga de backend pleno na Foxbit, cujo código do projeto com as informações necessárias para a execução estão disponíveis no github, para acessar [clique aqui](https://github.com/igoralvesantos/test_rover).
Nesse documento irei detalhar mais sobre a arquitetura, boas práticas de código utilizadas e pontos de melhoria.  

## Arquitetura

A arquitetura de software foi montada de acordo com os princípios da Arquitetura Limpa (Clean Architecture). Explicarei abaixo algumas das vantagens e as justificativa para cada camada utilizada:

- **entities**: Esta pasta contém as classes que representam os objetos do domínio do problema, como **`Coordinates`**, **`Plateau`**, **`Position`** e **`Rover`**. Isso facilita a compreensão do domínio do problema e permite que o código do domínio seja separado das preocupações técnicas.
- **infrastructure**: Esta pasta contém código que lida com detalhes técnicos, como a leitura de arquivos. Isso permite que o código do domínio seja independente de qualquer infraestrutura específica, tornando-o mais testável e portátil.
- **services**: Esta pasta contém serviços que realizam operações relacionadas ao domínio do problema. Neste caso, **`RoverNavigationService`**  contém a lógica para navegar um Rover.
- **use_cases**: Esta pasta contém classes que representam casos de uso específicos do sistema. Cada caso de uso contém a lógica de negócios necessária para realizar uma tarefa específica, neste caso, a exploração de um planalto em Marte.
- **utils**: Esta pasta contém funções utilitárias que são usadas em todo o projeto. Isso evita a duplicação de código e torna o código mais fácil de manter.
- **test**: Esta pasta contém testes para todas as classes e funções no projeto. Isso garante que o código funcione como esperado e facilita a detecção e correção de bugs, outra vantagem de deixar os testes separados é que automatizações se tornam mais fáceis.
- **index.ts**: Este é o ponto de entrada do aplicativo, onde todas as partes do sistema são reunidas e o aplicativo é iniciado.

As principais vantagens desta arquitetura são:

- **Separação de preocupações**: Cada parte do sistema tem uma responsabilidade clara, tornando o código mais fácil de entender e manter.
- **Testabilidade**: Como o código do domínio é separado dos detalhes técnicos, ele pode ser testado independentemente.
- **Reutilização de código**: Funções utilitárias e serviços podem ser reutilizados em todo o projeto, evitando a duplicação de código.
- **Flexibilidade**: É fácil substituir partes do sistema sem afetar o restante do código. Por exemplo, você poderia substituir **`NodeFileReader`** por uma classe que lê dados de um banco de dados sem alterar o código do domínio.

## Código

Busquei aplicar boas práticas de programação pois elas tornam o dia a dia e o futuro de uma aplicação bem mais saudável, as vantagens de seguir essas práticas e princípios incluem código mais legível, manutenível e extensível, redução de bugs e melhor colaboração entre os membros da equipe. Além disso, eles ajudam a garantir que o sistema seja facilmente escalável e possa se adaptar a mudanças nos requisitos. Abaixo irei falar um pouco dessas práticas e dar exemplos de onde elas estão aplicadas.

- **Encapsulamento**: As classes **`Coordinates`**, **`Plateau`**, **`Position`** e **`Rover`** fazem um bom uso do encapsulamento. Elas têm campos privados e fornecem métodos **`get`** para acessá-los. Isso garante que os dados dessas classes sejam protegidos e não possam ser alterados diretamente.
- **Princípio da Responsabilidade Única (Single Responsibility Principle)**: Cada classe tem uma responsabilidade clara e bem definida. Por exemplo, a classe **`Coordinates`** é responsável por manter as coordenadas x e y, a classe **`Plateau`** é responsável por manter as coordenadas mínimas e máximas e verificar se uma posição está fora dos limites.
- **Princípio Aberto/Fechado (Open/Closed Principle)**: As classes **`Coordinates`**, **`Plateau`**, **`Position`** e **`Rover`** estão fechadas para modificação (pois seus campos são privados e somente leitura), mas estão abertas para extensão (por meio de herança ou implementação de interfaces).
- **Princípio da Substituição de Liskov (Liskov Substitution Principle)**: Este princípio é aplicado na interface **`IFileReader`** e sua implementação **`NodeFileReader`**. Qualquer classe que implemente a interface **`IFileReader`** pode ser substituída por **`NodeFileReader`** sem afetar o comportamento do programa.
- **Princípio da Segregação de Interface (Interface Segregation Principle)**: A interface **`IFileReader`** é um bom exemplo desse princípio. Ela tem uma única responsabilidade - ler linhas de um arquivo.
- **Princípio da Inversão de Dependência (Dependency Inversion Principle)**: Este princípio é aplicado na classe **`NodeFileReader`**. Ela depende da abstração (**`IFileReader`**) e não de uma implementação concreta.
- **Padrões de Projeto (Design Patterns)**: O código tem o padrão de projeto **`Factory`** (na criação de objetos **`Coordinates`**, **`Plateau`**, **`Position`** e **`Rover`**) e o padrão **`Strategy`** (na implementação da interface **`IFileReader`**).
- **Clean Code**: O código é limpo, bem organizado e fácil de entender. As classes, métodos e variáveis têm nomes descritivos que indicam claramente sua finalidade.
- **Uso de Enums**: O uso de enums, como **`CardinalDirections`** e **`Commands`**, ajuda a evitar erros de digitação e torna o código mais legível e fácil de manter.
- **Uso de Mapas**: A classe **`RoverNavigationService`** usa mapas para definir a lógica de movimento e rotação. Isso torna o código mais organizado e fácil de entender.
- **Tratamento de Erros**: O código faz um uso do tratamento de erros. Por exemplo, na classe **`RoverNavigationService`**, se um movimento ou rotação inválido for detectado, um erro será lançado. Isso ajuda a prevenir comportamentos inesperados e facilita a depuração.
- **Injeção de Dependência**: A classe **`MarsPlateauExplorationUseCase`** recebe um **`IFileReader`** como um parâmetro de construtor, o que é um exemplo de Injeção de Dependência. Isso torna a classe mais flexível e testável, pois permite que diferentes implementações de **`IFileReader`** sejam usadas.
- **Separação de Preocupações**: O código procura separar as preocupações. Cada classe tem uma responsabilidade específica e não há sobreposição significativa de funcionalidade entre as classes.
- **Imutabilidade**: As classes **`Coordinates`** e **`Plateau`** usam campos somente leitura, o que promove a imutabilidade. Isso pode ajudar a prevenir bugs e tornar o código mais seguro.

## Melhorias

Tenho alguns pontos a levantar sobre melhorias que gostaria de fazer no código, a começar pelos tratamentos de erro, adição de mais testes e que eles garantam mais as regras de negócio, acredito que tenha espaço para adicionar mais melhorias como: 

- Tratamento caso ocorra algum problema na leitura do arquivo.
- Adicionar validators nas classes das entidades.
- Tratamento de erro ao ler o caminho do arquivo pela linha de comando.
- Validação e tratamento de erro caso um rover se mova para a mesma posição de outro.
- Adicionar um arquivo de strings unificando as descrições dos erros.
- Testar mais cenários tanto positivos quanto negativos e adicionar mais testes de lógica de negócio.