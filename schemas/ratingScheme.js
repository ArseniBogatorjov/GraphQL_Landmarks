const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;
const RatingType = require("./TypeDefs/ratingType");
const Rating = require("../models/rating");


