// const {ApolloServer, gql} = require('apollo-server');
//
// const typeDefs= gql`
//     type User {
//             email:String!
//             avatar:String!
//             friends:[User]!
//     }
//
//     type Query {
//         me: User!
//     }
// `
//
// const resolvers = {
//     Query:{
//         me:()=>{
//             return{
//                 email:'shahrokh@gmail.com',
//                 avatar:'shahrk.png'
//             }
//         }
//     }
// }
//
// const server = new ApolloServer({typeDefs, resolvers})
//
// server.listen(4000)
// .then(()=>console.log('on port 4000'))

const {ApolloServer, gql} = require('apollo-server')

const typeDefs = gql`
    type User {
        id:ID!
        username:String!
    }
    
    type Pet {
        id:String!
        createdAt:String!
        name:String!
        type:String!
    }
    
    type Query {
        pets:[Pet]!
    }
`

const resolvers = {
    Query:{
        pets:()=>{
            return[
                {id:'1',createAt:'now',name:'shahrokh',type:'human'},
                {id:'2',createAt:'after',name:'tara',type:'love'}
            ]
        }
    }

}

const server = new ApolloServer({typeDefs, resolvers})

server.listen(5000)
.then(()=>console.log('on port 5000000000'))