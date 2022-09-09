const axios = require("axios");
const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const { UserType, CompanyType } = require("./types");

const Queries = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios(`http://localhost:3000/users/${args.id}`).then(
          (res) => res.data
        );
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parentValue, args) {
        return axios(`http://localhost:3000/users`).then((res) => res.data);
      },
    },
    company: {
      type: CompanyType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios(`http://localhost:3000/companies/${args.id}`).then(
          (res) => res.data
        );
      },
    },
    companies: {
      type: new GraphQLList(CompanyType),
      resolve(parentValue, args) {
        return axios(`http://localhost:3000/companies`).then((res) => res.data);
      },
    },
  }),
});

module.exports = Queries;
