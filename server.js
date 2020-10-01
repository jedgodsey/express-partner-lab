const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

app.set('view-engine', 'ejs');

const carCtrl = require('./controllers/carCtrl.js')

app.use('/views', carCtrl); // how does this work?

// app.use('/fruits', fruitsCtrl);

app.get('/', (req, res) => {
    res.render('index')
});


app.listen(PORT, () => console.log(`listening on port ${PORT}`))
