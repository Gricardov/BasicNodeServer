const { response, request } = require('express');

const userGet = (req = request, res = response) => {
    const { q, nombre = 'no name', apiKey } = req.query;
    res.json({
        ok: true,
        msg: 'get API- controller',
        q,
        nombre,
        apiKey
    })
}

const userPut = (req, res = response) => {
    const id = req.params.id;
    res.status(500).json({
        ok: true,
        msg: 'put API - controller',
        id
    })
}

const userPost = (req, res = response) => {
    const body = req.body;

    res.json({
        ok: true,
        msg: 'get API- controller',
        body
    })
}

const userDelete = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'delete API - controller'
    })
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}