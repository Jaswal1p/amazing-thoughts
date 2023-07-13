// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

type Auth {
    token: ID!
    user: User
}

type Allthought {
  _id: ID
  thoughtText: String
  createdAt: String
  username: String
  reactionCount: Int
}

type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    thoughts: [Thought]
    friends: [User]
  }    

  


type Query {
    me: User
    users: [User]
    user(username: String!): User
    allThoughts: [Allthought]
    thoughts(username: String!): [Thought]
    thought(_id: ID!): Thought
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
}

`;

// export the typeDefs
module.exports = typeDefs;


// code for the getSingleUser query Variables is saved below for later review & possible use

// query getSingleUser($username: String!) {
//     user(username: $username) {
//       username
//       friendCount
//       thoughts {
//         thoughtText
//         createdAt
//       }
//       friends {
//         username
//       }
//     }
//   }