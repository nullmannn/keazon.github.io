const express = require("express");
const app = express();

app.engine("ejs", require("ejs").renderFile);

app.get("/", (req, res) => {
   res.render(`${__dirname}/index.ejs`);
});
app.get("/login", (req, res) => {
   res.render(`${__dirname}/login.ejs`);
});


app.listen(3000);

