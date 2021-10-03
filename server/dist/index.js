"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const graphqlPlayground_1 = require("apollo-server-core/dist/plugin/landingPage/graphqlPlayground");
const apollo_server_express_1 = require("apollo-server-express");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Gamble_1 = require("./entities/Gamble");
const Menu_1 = require("./entities/Menu");
const People_1 = require("./entities/People");
const Projects_1 = require("./entities/Projects");
const Questions_1 = require("./entities/Questions");
const Tours_1 = require("./entities/Tours");
const gamble_1 = require("./resolvers/gamble");
const menu_1 = require("./resolvers/menu");
const people_1 = require("./resolvers/people");
const projects_1 = require("./resolvers/projects");
const questions_1 = require("./resolvers/questions");
const tours_1 = require("./resolvers/tours");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, typeorm_1.createConnection)({
        type: 'postgres',
        database: 'my-profile',
        username: process.env.DB_USERNAME_DEV,
        password: process.env.DB_PASSWORD_DEV,
        logging: true,
        synchronize: true,
        entities: [People_1.People, Tours_1.Tours, Questions_1.Questions, Menu_1.Menu, Gamble_1.Gamble, Projects_1.Projects],
    });
    const app = (0, express_1.default)();
    app.use(express_1.default.static('public'));
    app.use((0, cors_1.default)({
        origin: 'http://localhost:3000',
        credentials: true,
    }));
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: yield (0, type_graphql_1.buildSchema)({
            resolvers: [
                people_1.PeopleResolver,
                tours_1.ToursResolver,
                questions_1.QuestionsResolver,
                menu_1.MenuResolver,
                gamble_1.GambleResolver,
                projects_1.ProjectsResolver,
            ],
            validate: false,
        }),
        plugins: [(0, graphqlPlayground_1.ApolloServerPluginLandingPageGraphQLPlayground)()],
    });
    yield apolloServer.start();
    apolloServer.applyMiddleware({ app, cors: false });
    const PORT = process.env.PORT || 4000;
    app.listen(4000, () => console.log(`Server started on port ${PORT}. GraphQL server started on http://localhost:${PORT}${apolloServer.graphqlPath}`));
});
main().catch((error) => console.log(error));
//# sourceMappingURL=index.js.map