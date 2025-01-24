# Minimal Koa Express GraphiQL Boilerplate

Este projeto é um boilerplate mínimo que utiliza o Express e o GraphiQL para facilitar o desenvolvimento de APIs GraphQL. Ele serve como um ponto de partida para quem deseja criar aplicações com GraphQL de forma rápida e simples.

## Tecnologias Utilizadas

- **Express**: Um framework web para Node.js que fornece um conjunto robusto de recursos para desenvolver aplicações web e móveis.
- **GraphQL**: Uma linguagem de consulta para APIs que permite solicitar exatamente os dados necessários.
- **GraphiQL**: Uma interface de usuário interativa para explorar e testar APIs GraphQL.

## Instalação

Para começar a usar este boilerplate, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITÓRIO>
   cd <NOME_DA_PASTA>
   ```

2. Instale as dependências:
   ```bash
   yarn install
   ```

3. Inicie o servidor:
   ```bash
   yarn start
   ```

O servidor estará rodando na porta `3000`. Você pode acessar a interface do GraphiQL em `http://localhost:3000/graphql`.

## Estrutura do Projeto

- `src/index.js`: O ponto de entrada da aplicação, onde o servidor Express é configurado e iniciado.
- `schema.graphql`: (opcional) Arquivo para definir o esquema GraphQL, se necessário.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Para isso, faça um fork do repositório e envie um pull request.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo `LICENSE` para mais detalhes.
