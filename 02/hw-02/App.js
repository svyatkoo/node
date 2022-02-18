// ДЗ
// декілька ендпоінтів зробити
// 1. /login, поля які треба відрендерити в файлі hbs:
//     firstName, lastName, email(унікальне поле), password, age, city
// просто зробити темплейт з цим усім і вводити свої дані які будуть пушитися в масив
// і редірект робити на сторінку з усіма юзерами /users і перевірка чи такий імейл не існує,
//     якщо існує то редірект на еррор пейдж
// 2. /users просто сторінка з усіма юзерами, але можна по квері параметрам їх фільтрувати по age і city
// 3. /user/:id сторінка з інфою про одного юзера
//
// 4. зробити якщо не відпрацюють ендпоінти то на сторінку notFound редірект

const path = require("path");
const express = require("express");
const app = express();
const {engine} = require("express-handlebars");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "static")));

app.set("view engine", ".hbs");
app.engine(".hbs", engine({defaultLayout: false}));
app.set("views", path.join(__dirname, "static"));

const users = [
    {
        id: 1,
        firstName: 'Taras',
        lastName: 'Levutsky',
        email: 'svyatkoo@gmail.com',
        password: '765142',
        age: '21',
        city: 'Lviv'
    }
];

app.get("/login", (req, res) => {
    res.render("loginPage");
})

app.post("/login", (req, res) => {
    let flag = true;
    users.forEach(user => {
        if (user.email === req.body.email) {
            flag = false;
            res.redirect("/errPage");
        }
    })
    if (flag) {
        users.push({...req.body, id: users.length ? users.length + 1 : 1});
        res.redirect("/users");
    }
});

app.get("/users", (req, res) => {
    if (req.query.age && req.query.city) {
        const filteredUsers = users.filter(user => user.age === req.query.age && user.city === req.query.city);
        res.render("usersPage", {users: filteredUsers});
        return;
    }
    if (req.query.city) {
        const filteredUsers = users.filter(user => user.city === req.query.city);
        res.render("usersPage", {users: filteredUsers});
        return;
    }
    if (req.query.age) {
        console.log("age");
        console.log(req.query);
        const filteredUsers = users.filter(user => user.age === req.query.age);
        res.render("usersPage", {users: filteredUsers});
        return;
    }
    res.render("usersPage", {users});
});

app.get("/users/:userId", (req, res) => {
    const user = users.find(user => user.id === +req.params.userId);
    res.render("userInfoPage", {user});
});



app.get("/sign", (req, res) => {
    res.render("signInPage");
})

app.post("/sign", (req, res) => {
    if (req.body.email && req.body.password) {
        const user = users.find(user => user.email === req.body.email && user.password === req.body.password);
        res.redirect(`/users/${user.id}`);
        return;
    }
    res.render("errEnter");
});





// app.post("/delete", (req, res) => {
//     const users = users.filter(user => user.id === +req.params.userId);
//     res.redirect("/users");
// });





app.get("/errPage", (req, res) => {
    res.render("errPage");
});

app.use((req, res) => {
    res.render("notFoundPage");
});

app.listen(5100, () => console.log("start"));