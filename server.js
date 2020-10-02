const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const PORT = 5000;

app.set('view engine', 'ejs');

const carCtrl = require('./controllers/carCtrl.js')

app.use('/cars', carCtrl); // how does this work?

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'))

app.get('/', (req, res) => { //home route
    res.render('../home')
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
