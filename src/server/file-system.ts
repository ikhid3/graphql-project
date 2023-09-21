import fs from 'fs'
import path from 'path'

export { typeDefs }

const schemaFile = path.join(__dirname, '../schema/schema.graphql')

const typeDefs = fs.readFileSync(schemaFile, 'utf-8')
