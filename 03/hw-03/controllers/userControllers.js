let users = require('../db/users');

class UsersController {
    renderUsers(req, res) {
        if (req.query.age && req.query.city) {
            const filteredUsers = users.filter(user => user.age === req.query.age && user.city === req.query.city);
            res.render('usersPage', {users: filteredUsers});
            return;
        }

        if (req.query.city) {
            const filteredUsers = users.filter(user => user.city === req.query.city);
            res.render('usersPage', {users: filteredUsers});
            return;
        }

        if (req.query.age) {
            console.log('age');
            console.log(req.query);
            const filteredUsers = users.filter(user => user.age === req.query.age);
            res.render('usersPage', {users: filteredUsers});
            return;
        }

        res.render('usersPage', {users});
    };

    renderUserById(req, res) {
        const user = users.find(user => user.id === +req.params.userId);
        res.render('userInfoPage', {user});
    };

    deleteUser(req, res) {
        users = users.filter(user => user.id !== +req.params.userId);
        res.redirect('/users');
    }
};

module.exports = new UsersController();