import {
  Article,
  Countries,
  Categories,
  DataSources
} from './connectors';
import axios from 'axios'

const resolvers = {
  Query: {

    Country(_, args) {

      return Countries[0]
    
    },

    Category(_, args) {

      return Categories.find(function (element) {
        return element == args;
      })
    },
    DataSource(_, args) {

      return DataSources.find(function (element) {
        return element == args;
      })
    },
    allCountrys(_, args) {
      return Countries
    },

    allCategorys(_, args) {
      return Categories
    
    },
    allDatasources(_, args) {
    return DataSources
    },

    news(_, args) {

      return axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: args.land,
          apiKey: '685148785cdb4a86a5457730855d44af',
          category: args.subject
        }
      }).then(response => {

        var info = response.data

        var results = [];
        for (var i = 0; i < info.articles.length; i++) {
          var currentItem = info.articles[i]
          results.push({
            title: currentItem.title,
            author: currentItem.author,
            url: currentItem.url,
            description: currentItem.description,
            urltoImage: currentItem.urltoImage,
            Publishedat: currentItem.Publishedat,

          })

        }

        return results

      })
    }
  }
}

export default resolvers;
