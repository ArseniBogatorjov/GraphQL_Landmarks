const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;
const PhotoType = require("./TypeDefs/photoType");
const Photo = require("../models/photo");
