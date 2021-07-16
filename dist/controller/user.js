"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletetUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.json({
        msg: "getUsuarios",
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "getUsuario",
        id,
    });
};
exports.getUser = getUser;
const postUser = (req, res) => {
    const { body } = req;
    res.json({
        msg: "postUsuario",
        body,
    });
};
exports.postUser = postUser;
const putUser = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: "putUsuario",
        body,
        id,
    });
};
exports.putUser = putUser;
const deletetUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "deleteUsuario",
        id,
    });
};
exports.deletetUser = deletetUser;
//# sourceMappingURL=user.js.map