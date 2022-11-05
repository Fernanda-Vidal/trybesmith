# Trybesmith

Projeto desenvolvido no módulo de Back-end do curso de Desenvolvimento Web da [Trybe](https://www.betrybe.com/). 

## Sobre o projeto

<div align="justify">
O Trybesmith é uma loja de itens medievais, no formato de uma API, utilizando Typescript. Nele é possível cadastrar e listar produtos, pedidos e usuários.
</div>

## Desenvolvimento 

<div align="justify">
Foi desenvolvida uma aplicação em Node.js com Express e arquitetura MSC (Model-Service-Controller). A aplicação possui uma estrutura de endpoints que segue os princípios da arquitetura REST e consome um banco de dados SQL, onde é possível realizar o CRUD (Criação, Leitura, Atualização e Exclusão) dos dados. Foram desenvolvidos middlewares para validação das requisições e utilizado JWT (JSON Web Token) para validação das permissões do usuário.
</div>

## Tecnologias

* Typescript
* Node.js
* Express
* DotEnv
* MySQL
* JWT
* Docker

## Como rodar o projeto com Docker

1 - Navegue até a pasta desejada e rode o comando abaixo no terminal para clonar o projeto:

`git clone git@github.com:Fernanda-Vidal/trybesmith.git`

2 - Entre na pasta desejada:

`cd trybesmith`

3 - Rode o serviço node com o seguinte comando:

`docker-compose up -d --build`

4 - Acesse o bash do container:

`docker exec -it trybesmith bash`

5 - Instale as dependências do projeto e rode a aplicação:

`npm install && npm start`
