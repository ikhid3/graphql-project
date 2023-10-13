"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const mock_1 = require("@graphql-tools/mock");
const schema_1 = require("@graphql-tools/schema");
const mocks_1 = require("../api/mocks");
const resolvers_1 = require("../api/resolvers");
const file_system_1 = require("./file-system");
const schema = (0, mock_1.addMocksToSchema)({
    schema: (0, schema_1.makeExecutableSchema)({ typeDefs: file_system_1.typeDefs }),
    resolvers: resolvers_1.resolvers,
    preserveResolvers: true,
    mocks: mocks_1.mocks
});
exports.schema = schema;
