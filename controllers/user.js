const { response } = require('express');

const userGet = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'get API- controller'
    })
}

const userPut = (re, res = response) => {
    res.status(500).json({
        ok: true,
        msg: 'put API - controller'
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