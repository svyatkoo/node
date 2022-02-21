const users = require("../db/users");

class LoginControllers {
    renderLoginPage(req, res) {
        res.render('loginPage');
    }

    checkEmailAndLoginUser(req, res){
        let flag = true;
        users.forEach(user => {
            if (user.email === req.body.email) {
                flag = false;
                res.redirect('/errPage');
            }
        });

        if (flag) {
            users.push({...req.body, id: users.length ? users.length + 1 : 1});
            res.redirect('/users');
        }
    }

}

module.exports = new LoginControllers();