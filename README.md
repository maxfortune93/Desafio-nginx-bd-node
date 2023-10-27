
<h1 align="center">Desafio Docker FullCycle</h1>

## Description do desafio
Nesse desafio a idéia principal é usar o nginx como proxy reverso para chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h2>Full Cycle Rocks!</h2>

- Lista de nomes cadastrada no banco de dados.

## Condição

* A linguagem de programação para este desafio é Node/JavaScript.

* Gerar o docker-compose de forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

## Pre Requisitos para rodar o projeto

  * Ambientes Linus, Mac ou Windows com WSL2.

  * Ter docker instalado 

## Rodar a aplicação 

Execute o comando:
```
docker-compose up -d
```

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- Docker
- Node
- MYSQL
- TypeScript