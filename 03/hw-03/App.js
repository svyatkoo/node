const path = require("path");
const express = require("express");
const app = express();
const {engine} = require("express-handlebars");
const apiRoutes = require("./routes/apiRoutes");

//Default setup
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

//Engine setup
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

//Routes setup
app.use(apiRoutes);

app.get('/errPage', (req, res) => {
    res.render('errPage');
});

app.use((req, res) => {
    res.render('notFoundPage');
});

app.listen(5100, () => console.log('start'));