const users = require("../db/users");

function isUserValid(req, res, next) {
    try {
        const {email, password} = req.body;

        if (!email || !password) {
            throw new Error("Email or password are empty!");
        };

        const user = users.find(user => user.email === email)
        if (user.password !== password) {
            throw new Error("Email or password are are not valid!")
        };

        next();
    } catch (err) {
        res.status(400).send(err.message);
    }
};

module.exports = isUserValid;