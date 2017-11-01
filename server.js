const express = require('express');
const http = require('http');
const path = require('path');

//const api = require('.server/routes/api');

const app = express();

//path is in 'dist' and all routes will be going to 'dist/index.html'.
//this is because files are put into the 'dist' folder when we run ng build
//__dirname is just a node variable which returns the path to the current directory
app.use(express.static(path.join(__dirname, 'dist')));
//allows angular to handle our routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'dist/index.html'));
});

const port = process.env.PORT || '3001';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Server running on localhost:${port}`));