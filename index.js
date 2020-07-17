var express = require("express");
var app = express();
var bodyPaser = require('body-parser');
var urlencodedParser = bodyPaser.urlencoded({ extended: false })
    //config ejs
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/manhnguyen", function(req, res) {
    res.render("manh");

})
app.listen(3000);
app.get("/hello", function(req, res) {
    res.send("<a>Hello</a>");


});
app.post("/hello", function(req, res) {
    res.send("<a>Posst</a>");


});
app.get("/tintuc/:id", function(req, res) {
    var i = req.params.id;
    res.send("Server nhan dc " + i);

});
app.post("/tintuc", urlencodedParser, function(req, res) {
    var u = req.body.username;
    var p = req.body.password;
    res.send("User name +pass " + u + p);


})