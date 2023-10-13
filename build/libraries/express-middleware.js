"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contextProvider = exports.logger = exports.corsHandler = exports.bodyParser = void 0;
const express4_1 = require("@apollo/server/express4");
const body_parser_1 = require("body-parser");
const cors_1 = __importDefault(require("cors"));
exports.bodyParser = (0, body_parser_1.json)();
exports.corsHandler = (0, cors_1.default)();
function logger(req, res, next) {
    console.error(req.cookies, req.signedCookies, req.headers.cookie);
    next();
}
exports.logger = logger;
function contextProvider(server) {
    return (0, express4_1.expressMiddleware)(server, {
        context: async ({ req }) => ({
            token: req.headers.token,
            id: req.headers.cookie
                ?.split(';')
                .find((cookie) => cookie.includes('userToken'))
                ?.split('=')[1]
        })
    });
}
exports.contextProvider = contextProvider;
