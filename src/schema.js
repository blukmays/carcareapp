const graphql = require ('graphql') ;
const {
   GraphQLObjectType
} = graphql;

const UserType = new GraphQLObjectType({
   name: 'User',
    fields: {
       id:{type:GraphQLString},
        firstName:{type:GraphQLString},
        phone:{type:GraphQLString},
        address:{type:GraphQLString},

    }
});

const RootQuery = newGraphQLObjectType ({
    name: 'RootQueryType',
    fields: {
    user: {
        type: UserType,
        args:{ id: {type:GraphQLString}},
        resolve(parentValue,args) {


        }

    }
    }
})