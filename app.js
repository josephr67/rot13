const express = require('express');

const cors = require('cors');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve('../public')));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


function rotate(s) { 
   return s
}

app.get('/encrypt', (request, response) => {

//TODO: var key = request.query.key;
//var request = (query.key) 
 
var plaintext = request.query.plaintext
var ciphertext = ""; 

for(var n=0; n < plaintext.length; n++) {
    ciphertext += rotate(plaintext.toLowerCase()[n])
}
response.status(200).send( ciphertext );
});

app.get('/', (request, response) => {

    res.status(200).sendFile('index.html', {
        root: path.resolve('../public')
        
    });
    //res.sendFile(__dirname + 'index.html');
});

app.get('/admin', (request, response)  => {
    res.status(200).sendFile('admin.html', {
        root: path.resolve('../public')
    });
})


app.get('/getMeme', function (request, response, next) {

    var filename;
    //TODO: get filename, at random, from db
    response.status(200).sendFile(filename);
     
})


app.get('/insertRating', (request, response)  => {
    
    var ratee = request.query.ratee;
    var stars = request.query.stars;
    var comment = request.query.comment;
    
    dao.insertRating(ratee, stars, comment);

    response.status(200).send( {});
})

app.get('/getRatings', (request, response)  => {
    //TODO: connect to the database, select all ratings, and return them in an HTML table or similar
    response.status(200).send( 'This is just a test, not real ratings. Sorry.' );
})

app.listen(3000 || process.env.PORT, () => {
    console.log("Server on...")
})