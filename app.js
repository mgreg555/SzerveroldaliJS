const express = require('express');
const app = express();

app.set('view engine','ejs');

app.use(express.static('static'));

// routing
require('./route/index')(app);


app.listen(3000, function () {
    console.log("On : 3000")
});


