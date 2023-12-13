"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const server_1 = require("@apollo/server");
const drainHttpServer_1 = require("@apollo/server/plugin/drainHttpServer");
const express_1 = require("./express");
const graphql_tools_1 = require("./graphql-tools");
exports.server = new server_1.ApolloServer({
    schema: graphql_tools_1.schema,
    plugins: [(0, drainHttpServer_1.ApolloServerPluginDrainHttpServer)({ httpServer: express_1.httpServer })]
});
