const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

//API file for interacting with MongoDB
const api = require('./server/routes/api');

//configure cors
// var corsOptions = {
//     origin:  ["http://localhost:4200","http://localhost:4200/register"],
//     optionsSuccessStatus: 200 
// }
app.use(cors());

//Parsers
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

//API location
app.use('/api',api);

//Send all other requests to the Angular App
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'dist/index.html'));
});

//Set port
const port = process.env.PORT || '3001';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Server running on localhost:${port}`));