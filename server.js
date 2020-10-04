const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //1
const methodOverride = require('method-override'); //2
const PORT = 5000;

app.set('view engine', 'ejs'); //3

const carCtrl = require('./controllers/carCtrl.js') //4



app.use(bodyParser.urlencoded({extended: false})); //6
app.use(methodOverride('_method')) //7

app.get('/', (req, res) => { //home route
    res.render('../home')
});

app.use('/cars', carCtrl); // how does this work?

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
