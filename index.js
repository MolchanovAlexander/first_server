const http = require('http')
const EventEmitter = require('events')

const PORT = process.env.PORT || 5000;

const emitter = new EventEmitter()

class Router {
    constructor() {
        this.endpoints = {}
    }
    request(method = "GET", path, handler) {
        if (!this.endpoints[path]) {
            this.endpoints[path] = {}
        }
        //users [GET,POST,PUT] /posts [GET,POST,PUT, DELETE]
        const endpoint = this.endpoints[path]
        if (endpoint[method]) {
            throw new Error(`[${method}] по адресу ${path} уже сущестует`)
        }
        endpoint[method] = handler
        emitter.on(`[${path}]:[${method}]`, (req, res) => {
            handler(req, res)
        })
    }
    get(path, handler) {
        this.request('GET', path, handler)
    }
    post(path, handler) {
        this.request('POST', path, handler)
    }
    put(path, handler) {
        this.request('PUT', path, handler)
    }
    delete(path, handler) {
        this.request('DELETE', path, handler)
    }
}
const router = new Router()
router.get('/users', (req, res) => {
    res.end(`
    <h1 style="color: green">server is working!</h1>
    <br>
        <div style="background: red; height: 300px;">
            <h1 style="color: white">
                ---YOU SEND REQUEST TO /USERS---
            </h1>
        </div>`
    )
}
)
router.get('/posts', (req, res) => {
    res.end(`
    <h1 style="color: blue">server is working!</h1>
    <br>
        <div style="background: yellow; height: 300px;">
            <h1 style="color: black">
                ---YOU SEND REQUEST TO /POSTS---
            </h1>
        </div>`
    )
})
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/html; charset=utf-8'
    })
    const emitted = emitter.emit(`[${req.url}]:[${req.method}]`, req, res)
    if (!emitted) {
        res.end()
    }


})
server.listen(PORT, console.log(`Servak start na PORTy ${PORT}`))



// if (req.url === '/users') {
//     res.end(`
// <h1 style="color: green">server is working!</h1>
// <br>
//     <div style="background: red; height: 300px;">
//         <h1 style="color: white">
//             ---USERS 10101011010---
//         </h1>
//     </div>`
//     )
// }
// if (req.url === '/posts') {
//     res.end(`
//     <h1 style="color: blue">server is working!</h1>
//     <br>
//         <div style="background: yellow; height: 300px;">
//             <h1 style="color: black">
//                 ---YOU SEND REQUEST TO /POSTS---
//             </h1>
//         </div>`
//     )
// } else {
//     res.end(`
// <h1 style="color: orange">server is working!</h1>
// <br>
//     <div style="background: red; height: 100px;">
//         <h1 style="color: white">
//             ---7---
//         </h1>
//     </div>`
//     )
// }