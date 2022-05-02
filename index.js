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
        createAt:String!
        name:String!
        type:String!
    }
    
    input PetInput {
        name:String!
        type:String!
    }
    
    type Query {
        pets(input:PetInput):[Pet]!
    }
`

const resolvers = {
    Query:{
        pets(_,{input}){
            return[
                {id:'1',createAt:'now',name:'shahrokh',type:'human'},
                {id:'1',createAt:'after',name:'shahrokh',type:'human'},
                {id:'2',createAt:'after',name:'tara',type:'love'}
            ].filter(pet=>pet.name === input.name)
        }
    }

}

const server = new ApolloServer({typeDefs, resolvers})

server.listen(5000)
.then(()=>console.log('on port 5000000000'))