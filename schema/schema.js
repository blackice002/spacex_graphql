const graphql = require("graphql");
const axios = require("axios");

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLID,
  ObjectID,
} = graphql;

const OrginalImage = new GraphQLObjectType({
  name: "orginalImage",
  fields: () => ({
    original: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
  }),
});

const PatchType = new GraphQLObjectType({
name:"patch",
description:"Get the launch Logo",
fields : () => ({
  small:{type:GraphQLString}
})
})
const LinksType = new GraphQLObjectType({
  name: "flickr",
  fields: () => ({
    flickr: { type: OrginalImage },
    patch:{type:PatchType},
    wikipedia: { type: GraphQLString },
  }),
});
//
const RocketType = new GraphQLObjectType({
  name: "Rocket",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    country: { type: GraphQLString },
    company: { type: GraphQLString },
    description: { type: GraphQLString },
    flickr_images: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
  }),
});

const LunchType = new GraphQLObjectType({
  name: "Launch",
  fields: () => ({
    id: { type: GraphQLID },
    flight_number: { type: GraphQLInt },
    name: { type: GraphQLString },
    date_local: { type: GraphQLString },
    success: { type: GraphQLBoolean },
    rocket: { type: GraphQLID },
    getRocket: {
      type: RocketType,
      resolve: async (parent) => {
        return await axios
          .get(`https://api.spacexdata.com/v4/rockets/${parent.rocket}`)
          .then((res) => res.data);
      },
    },
    details: { type: GraphQLString },
    links: { type: LinksType },

  }),
});

// Root Query

const RootQuery = new GraphQLObjectType({
  name: "RootQuerytype",
  fields: {
    launches: {
      type: new GraphQLList(LunchType),
      resolve: async (parent, args) => {
        return await axios
          .get("https://api.spacexdata.com/v4/launches")
          .then((res) => res.data);
      },
    },
    launch: {
      type: LunchType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        return await axios
          .get(`https://api.spacexdata.com/v4/launches/${args.id}`)
          .then((res) => res.data);
      },
    },

    // get letest
    latest: {
      type: LunchType,
      resolve: async () => {
        return await axios
          .get("https://api.spacexdata.com/v4/launches/latest")
          .then((res) => res.data);
      },
    },

    //
    rockets: {
      type: new GraphQLList(RocketType),
      resolve: async (parent, args) => {
        return await axios
          .get("https://api.spacexdata.com/v4/rockets")
          .then((res) => res.data);
      },
    },
    rocket: {
      type: RocketType,
      args: {
        id: { type: GraphQLID },
      },
      resolve: async (parent, args) => {
        return await axios
          .get(`https://api.spacexdata.com/v4/rockets/${args.id}`)
          .then((res) => res.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
