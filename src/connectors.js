import Sequelize from 'sequelize';
import casual from 'casual';
import _ from 'lodash';
// add this import at the top
import fetch from 'node-fetch';


const db = new Sequelize('blog', null, null, {
  dialect: 'sqlite',
  storage: './new.sqlite',
});


// add this somewhere in the middle
const FortuneCookie = {
    getOne() {
      return fetch('http://fortunecookieapi.herokuapp.com/v1/cookie')
        .then(res => res.json())
        .then(res => {
          return res[0].fortune.message;
        });
    },
  };
  db.dropAllSchemas();

const AuthorModel = db.define('author', {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
});

const CountryModel = db.define('Country', {
  name: { type: Sequelize.STRING },
  shortName: { type: Sequelize.STRING },
});

const CategoryModel = db.define('Category', {
  name: { type: Sequelize.STRING },
});
const DatasourceModel = db.define('DataSource', {
  name: { type: Sequelize.STRING },
});
const PostModel = db.define('post', {
  title: { type: Sequelize.STRING },
  text: { type: Sequelize.STRING },
});

AuthorModel.hasMany(PostModel);
PostModel.belongsTo(AuthorModel);
CountryModel.hasMany(CountryModel);
CategoryModel.hasMany(CategoryModel);
DatasourceModel.hasMany(DatasourceModel);
// create mock data with a seed, so we always get the same


CountryModel.create({

     name: 'Switzerland',

    shortName: 'CH',
    
  });
  CountryModel.save

/*'entertainment',
'general health',
'science',
'sports',
'technology'
 name: 'entertainment',
     name: 'general health',
     name: 'science',
     name: 'sports',
     name: 'technology',
*/
     CategoryModel.build(
       {

     name: 'Business',
  
  }
);

    
   CategoryModel.save

 DatasourceModel.create({

   name: 'Reuters',
  
  });
  DatasourceModel.save
  
  AuthorModel.create({
        firstName: 'Martin',
        lastName: 'Spedding',
  }
  );
  AuthorModel.save



    db.sync();
const Author = db.models.author;
const Post = db.models.post;
const Country = db.models.Country;
const Category = db.models.Category;
const DataSource = db.models.DataSource;

export { Author, Post, FortuneCookie, Country, Category, DataSource };