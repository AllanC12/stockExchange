const jsonServer = require('json-server')
const cors = require('cors')

const server = jsonServer.create()
const router = server.router('data/db.json')

const middlewares = jsonServer.defaults()

const corsOptions = {
    origin: 'http://localhost:3000', // Define a origem permitida
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Define os métodos permitidos
  }

server.use(cors(corsOptions))
server.use(middlewares)

server.use(router)

server.listen(3000, () => {
    console.log('running on port 3000')
})