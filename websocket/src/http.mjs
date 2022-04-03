import express from 'express'
import http from 'http'
import path from 'path'
import { Server } from 'socket.io'
const app = express() 

// app.get('/', (req, res) => {
//   res.send('testa websocket')
// })
console.log(path.resolve())
console.log(path.resolve() + '/public')
app.use(express.static(path.join(path.resolve(), '..', 'public')))
app.use(express.static(path.resolve() + '/public'))

const serverHttp = http.createServer(app)

const io = new Server(serverHttp)

export { serverHttp, io}