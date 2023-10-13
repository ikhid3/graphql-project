"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_1 = require("./apollo");
const express_1 = require("./express");
const express_middleware_1 = require("./express-middleware");
apollo_1.server.start().then(() => {
    express_1.app.use('/', express_middleware_1.corsHandler, express_middleware_1.bodyParser, express_middleware_1.logger, (0, express_middleware_1.contextProvider)(apollo_1.server));
    express_1.httpServer.listen({ port: 4001 }, () => {
        console.error(`🚀 Server ready at http://localhost:4001`);
    });
});
