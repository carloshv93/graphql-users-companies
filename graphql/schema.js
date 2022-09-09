const graphql = require("graphql");
const Queries = require("./queries");
const Mutations = require("./mutations");

const { GraphQLSchema } = graphql;

module.exports = new GraphQLSchema({
  query: Queries,
  mutation: Mutations,
});
