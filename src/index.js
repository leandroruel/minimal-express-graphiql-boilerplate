import express from 'express'
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Query {
      hello: String
    }
  `);

const root = {
    hello: () => "Hello, GraphiQL!",
};

const app = express()
const port = 3000

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        rootValue: root,
        graphiql: true, // Enable GraphiQL
    })
);


app.get('/', (req, res) => {
    res.send('Olá Mundo!')
})

app.listen(port, () => {
    console.log(`App de exemplo esta rodando na porta ${port}`)
})