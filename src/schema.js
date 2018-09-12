import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
/*import mocks from './mocks';*/
import resolvers from './resolvers'

const typeDefs = `
type Query {
  
  Country(name:String, shortName: String): Country
  Article(author:String, title: String,descrition:String, url: String,urltoImage:String, Publishedat: String): Article
 
  allCountrys: [Country]
  Category(name:String): Category
  allCategorys: [Category]
  DataSource(name:String): DataSource
  allDatasources: [DataSource]
  news(land: String, subject: String, source: String): [Article]
}

type Article
{
    author:String
    title:String
    description:String
    url:String
    urltoImage:String
    Publishedat:String
    
}
type Country
{
  name: String
  shortname: String
}

type Category
{
  name: String
}
type news
{
  url: String
}

type DataSource
{
  name: String
}
`


const schema = makeExecutableSchema({ typeDefs, resolvers })

/*addMockFunctionsToSchema({ schema, mocks });*/

export default schema;