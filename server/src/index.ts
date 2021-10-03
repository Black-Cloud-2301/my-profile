require('dotenv').config();
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core/dist/plugin/landingPage/graphqlPlayground';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { Gamble } from './entities/Gamble';
import { Menu } from './entities/Menu';
import { People } from './entities/People';
import { Projects } from './entities/Projects';
import { Questions } from './entities/Questions';
import { Tours } from './entities/Tours';
import { GambleResolver } from './resolvers/gamble';
import { MenuResolver } from './resolvers/menu';
import { PeopleResolver } from './resolvers/people';
import { ProjectsResolver } from './resolvers/projects';
import { QuestionsResolver } from './resolvers/questions';
import { ToursResolver } from './resolvers/tours';

const main = async () => {
  await createConnection({
    type: 'postgres',
    database: 'my-profile',
    username: process.env.DB_USERNAME_DEV,
    password: process.env.DB_PASSWORD_DEV,
    logging: true,
    synchronize: true,
    entities: [People, Tours, Questions, Menu, Gamble, Projects],
  });

  const app = express();

  app.use(express.static('public'));
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        PeopleResolver,
        ToursResolver,
        QuestionsResolver,
        MenuResolver,
        GambleResolver,
        ProjectsResolver,
      ],
      validate: false,
    }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app, cors: false });

  const PORT = process.env.PORT || 4000;
  app.listen(4000, () =>
    console.log(
      `Server started on port ${PORT}. GraphQL server started on http://localhost:${PORT}${apolloServer.graphqlPath}`
    )
  );
};

main().catch((error) => console.log(error));
