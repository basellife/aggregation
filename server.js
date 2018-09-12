import express from 'express';
import cors from 'cors';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './src/schema';

const GRAPHQL_PORT =8082;


const graphQLServer =express();

const
 corsOptions =
{
    origin(origin,callback)
{

callback(null,true);

},

    credentials:
true

};

graphQLServer.use(cors(corsOptions));

var
 allowCrossDomain =
function(req,
 res,
 next)
{

    res.header('Access-Control-Allow-Origin',
'*');

    res.header('Access-Control-Allow-Methods',
'GET,PUT,POST,DELETE,OPTIONS');

    res.header('Access-Control-Allow-Headers',
'Content-Type,token');

    next();

}

graphQLServer.use(allowCrossDomain);


graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

graphQLServer.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running on //localhost:${GRAPHQL_PORT}/graphiql`
  )
);