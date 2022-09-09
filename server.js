const express = require("express");
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');

const app = express();

app.use(
  "/graphql",
  graphqlHTTP ({
    graphiql: true,
    schema,
  })
);

app.listen(4000, () => {
  console.log("GraphQL: http://localhost:4000/graphql");
});
