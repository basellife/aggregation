import { Article,Category, Country, DataSource } from './connectors';
import axios from 'axios'
/*
const connectionString =  process.env.DATABASE_URL || 'postgres://localhost:5432/newsinfo';
const pgp = require('pg-promise')();
const db = {}
db.conn = pgp(connectionString);
*/

const resolvers = {
  Query: {
    
      Country(_, args) {
      
     return Country.find({ where: args });
      },
      Category(_, args) {
        return Category.find({ where: args });
      },
      DataSource(_, args) {
        return DataSource.find({ where: args });
      },
      allCountrys(_, args) {
        return Country.findAll({ where: args });
      },
      
      allCategorys(_, args) {
        return Category.findAll({ where: args });
      },
      allDatasources(_, args) {
        return Datasource.findAll({ where: args });
      },
 
  news(_, args) {
/*
  if (args.source=='hackernoon'){
  console.log("hackernoon")

  return axios.get('https://hacker-news.firebaseio.com/v0/topstories.json'
  ).then(response => {

    var info =response.data
 
      var results = [];
      for(var i = 0; i < info.articles.length; i++) {
        var currentItem =info.articles[i]
        results.push({title:currentItem.title,
         author: currentItem.author,
          url: currentItem.url,
          description: currentItem.description,
          urltoImage:currentItem.urltoImage ,
          Publishedat:currentItem.Publishedat ,

        })

    }
     
return results



  }
*/
    return axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country: args.land,
        apiKey: '685148785cdb4a86a5457730855d44af',
        category: args.subject
      }
    }
  ).then(response => {

    var info =response.data
 
      var results = [];
      for(var i = 0; i < info.articles.length; i++) {
        var currentItem =info.articles[i]
        results.push({title:currentItem.title,
         author: currentItem.author,
          url: currentItem.url,
          description: currentItem.description,
          urltoImage:currentItem.urltoImage ,
          Publishedat:currentItem.Publishedat ,

        })

    }
     
return results
  
        }
      )
    }
  }
}

export default resolvers;