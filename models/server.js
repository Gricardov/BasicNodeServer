const express = require('express')


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();

        // Rutas
        this.routes();
    }

    middlewares() {
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.get('/api', (req, res) => {
            res.json({
                ok: true,
                msg: 'get'
            })
        })
        this.app.put('/api', (req, res) => {
            res.status(500).json({
                ok: true,
                msg: 'put'
            })
        })
        this.app.post('/api', (req, res) => {
            res.json({
                ok: true,
                msg: 'post'
            })
        })
        this.app.delete('/api', (req, res) => {
            res.json({
                ok: true,
                msg: 'dekete'
            })
        })
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Listening on ' + this.port);
        })
    }
}

module.exports = Server;