"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryExternalStore = exports.seedStore = void 0;
const fetch_1 = require("@whatwg-node/fetch");
function seedStore(store) {
    store.set('Project', '1', {});
}
exports.seedStore = seedStore;
async function queryExternalStore(body) {
    const response = await (0, fetch_1.fetch)('', {
        method: 'POST',
        body: JSON.stringify({
            operationName: body.name,
            query: body.queryString,
            variables: body?.variables ?? {}
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const json = await response.json();
    return json.data;
}
exports.queryExternalStore = queryExternalStore;
