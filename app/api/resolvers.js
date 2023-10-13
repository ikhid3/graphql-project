"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const sources_1 = require("./sources");
function resolvers(store) {
    (0, sources_1.seedStore)(store);
    return {
        Query: { me: () => true },
        Mutation: { you: () => false }
    };
}
exports.resolvers = resolvers;
