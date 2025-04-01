const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const LandmarkType = require("./landmarkType"); 

const LandmarkWithAvgRatingType = new GraphQLObjectType({
  name: "LandmarkWithAvgRating",
  fields: () => ({
    landmark: { type: LandmarkType }, 
    avgRating: { type: GraphQLString },
  }),
});

module.exports = LandmarkWithAvgRatingType;
