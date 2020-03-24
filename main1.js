var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/view'));

app.set('views', path.join(__dirname, 'view'));
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);

app.get("/", function(req, res){
    res.render("index1.html");
});

app.listen(process.env.PORT || 8000, function(){});

