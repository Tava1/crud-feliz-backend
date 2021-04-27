# Um CRUD Muito feliz
Este projeto tem como objetivo prover uma API back-end que será consumida por um [front-end](https://github.com/Tava1/crud-feliz-frontend) totalmente construído em React :atom_symbol:. 

## Acesse e confira o repositório [front-end](https://github.com/Tava1/crud-feliz-frontend)
[https://github.com/Tava1/crud-feliz-frontend](https://github.com/Tava1/crud-feliz-frontend)

## Visite o site (EM BREVE) :link:

A aplicação pode ser visitada a qualquer momento pelo link: [https://crud-feliz-frontend.vercel.app/](https://crud-feliz-frontend.vercel.app/)

Publicação realizada pelo [Vercel](https://vercel.com/).

## Sobre o projeto
Este projeto trata-se de uma API construída em ```Node.js``` e ```TypeScript```. Para criar uma API que dispoe os métodos ```HTTP Rest``` utilizei o framework ```Express```. Para o controle e gerenciamento do banco de dados ```Postgre```, utilizo o ```TypeORM```, onde me possibilita manter um versionamento de tabelas por meio das ```migrations``` e executar querys com grande facilidade, sem a utilização de código SQL Nativo ou Raw.

### Tecnologias utilizadas

- Node.js (Express)
- [TypeScript](https://www.typescriptlang.org/)
- TypeORM
- Postgre

### Protótipos (Mockups)
Visite o [projeto no Figma](https://www.figma.com/file/CXqPSdVHdIUefjw7cnRafn/Um-pequeno-CRUD?node-id=0%3A1) para conferir o protótipo.

## Vamos começar? :smiley:
### Instalação do projeto

Após clonar o projeto do [repositório Github](https://github.com/Tava1/crud-feliz-backend), navegue até a raiz e execute o seguinte comando no terminal:

Este comando irá instalar todas as dependências necessárias do projeto.
```BASH
yarn
```

Após a instalação das depências, podemos utilizar alguns comando disponíveis.

### :construction: Ambiente de desenvolvimento
Executar o projeto em ambiente local de desenvolvimento.
```BASH
yarn dev
```

### :wrench: Build do projeto
Para realizar o build do projeto.
```BASH
yarn build
```

## Rotas

Confira o aquivo de rotas ```src/routes/people.routes.ts```

### Parâmetros
```:id``` - Utiliza-se ```uuid``` gerado apartir do banco de dados para identificar uma pessoa.

Listar todas pessoas
- ```GET:``` /people

Detalhar uma pessoa
- ```GET:``` /people/:id

Nova pessoa
- ```POST:``` /people/

Atualizar uma pessoa
- ```PUT:``` /people/:id

Deletar uma pessoa
- ```DELETE:``` /people/:id

## Estrutura de diretórios do projeto

```/src``` - Este diretório armazena todo o código desenvolvido ou seja, lógica da aplicação, rotas, models e etc.

```/src/controller``` - Lógica do CRUD e conexão com a repository para persistência no banco de dados. 

```/src/database``` - Conexão com o banco de dados e armazenamento de todas as migrations.

```/src/models``` - Modelos e entidades.

```/src/routes``` - Armazena todas as Rotas disponíveis na aplicação.
