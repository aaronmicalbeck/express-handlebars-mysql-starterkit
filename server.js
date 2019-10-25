const express = require('express');
const exphbs  = require('express-handlebars');
const exphbs = require(`express-handlebars`);
const PORT = process.env.PORT || 8080;
const app = express();
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "",
    database: ""
})
connection.connect(function(err){
    if (err) throw err;
});
 
app.get('/', function (req, res) {
    res.render('home');
});
 
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  

