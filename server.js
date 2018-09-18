const express = require('express');
const app = express();
const port = 4200;
const hbs = require('hbs');
const fs = require('fs');

hbs.registerPartials(__dirname + "/views/partials/");
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIT', (text) => {
    return text.toUpperCase();
});

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));
app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now} : ${req.method}  ${req.url} `;
    fs.appendFile('server.log', log + '\n', (res) => {

    });
    next();
});

// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });

app.get('/', (req, res) => {
    res.render("home", {
        pageTitle: "Home title",
        welcomeMessage: 'Hello world'
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        pageTitle: "About title"
    });
});

app.get("/errr", (req, res) => {
    res.send("Error message page");
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});