"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const schemaFile = path_1.default.join(__dirname, '../api/schema.graphql');
const typeDefs = fs_1.default.readFileSync(schemaFile, 'utf-8');
exports.typeDefs = typeDefs;
