import { ApolloServer, BaseContext } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { json } from 'body-parser'
import cors from 'cors'
import e, { NextFunction, Request, RequestHandler, Response } from 'express'

export const bodyParser = json()

export const corsHandler = cors<cors.CorsRequest>()

export function logger(req: Request, res: Response, next: NextFunction): void {
  console.error(req.cookies, req.signedCookies, req.headers.cookie)
  next()
}

export function contextProvider(server: ApolloServer<BaseContext>): e.RequestHandler {
  return expressMiddleware(server, {
    context: async ({ req }) => ({
      token: req.headers.token,
      id: req.headers.cookie
        ?.split(';')
        .find((cookie) => cookie.includes('userToken'))
        ?.split('=')[1]
    })
  }) as RequestHandler<unknown, unknown, unknown, unknown, Record<string, unknown>>
}

export function createMiddleware(){
  
}
