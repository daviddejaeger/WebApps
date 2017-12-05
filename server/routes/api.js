const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const objectID = require('mongodb').ObjectID;


//Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://user:user@ds227045.mlab.com:27045/gettingstarted', (err,db) =>{
        if (err) return console.log(err);

        closure(db);
    });
}

//Error handling
const sendError = (err, res) =>{
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

//Response handling
let response = {
    status: 200,
    data: [],
    message: null
}

//Get products
router.get('/products', (req, res) => {
    connection((db)=>{
        db.collection('products')
            .find()
            .toArray()
            .then((products )=>{
                response.data = products;
                res.json(response);
            })
            .catch((err)=>{
                sendError(err,res);
            });
    });
});
// router.get('/products', (req, res) =>{
//     Product.find(function(err, products){
//         if(err)
//             console.log(err);
//         else
//             res.json(products);
//     });
// });


module.exports = router;
