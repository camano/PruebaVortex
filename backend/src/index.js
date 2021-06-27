const express = require('express');
const app = express();
const cors = require('cors');
//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use(require('./routes/preguntasRest'));
app.use(require('./routes/respuestaRest'))

//starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});