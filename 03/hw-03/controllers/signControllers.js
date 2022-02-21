const users = require("../db/users");

class SignController {
    renderSignInPage(req, res) {
        res.render("signInPage");
    };

    signInUser(req, res) {
        if (req.body.email && req.body.password) {
            const user = users.find(user => user.email === req.body.email && user.password === req.body.password);
            res.redirect(`/users/${user.id}`);
            return;
        }

        res.render("errEnter");
    }
};

module.exports = new SignController();