import express from 'express'
import http from 'http'

export function createHttpServer(listener: http.RequestListener){
  return http.createServer(listener)
}

export function createHttpListener(){
  return express()
}
