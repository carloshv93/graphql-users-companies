const graphql = require("graphql");
const RootQueryType = require("./queries");
const Mutations = require("./mutations");

const { GraphQLSchema } = graphql;

module.exports = new GraphQLSchema({
  query: RootQueryType,
});
