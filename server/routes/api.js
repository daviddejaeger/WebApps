const express = require('express');
const router = express.Router();
//const MongoClient = require('mongodb').MongoClient;
//const objectID = require('mongodb').ObjectID;

const mongojs =require('mongojs');
const db = mongojs('mongodb://user:user@ds227045.mlab.com:27045/gettingstarted');


//Connect
// const connection = (closure) => {
//     return MongoClient.connect('mongodb://user:user@ds227045.mlab.com:27045/gettingstarted', (err,db) =>{
//         if (err) return console.log(err);

//         closure(db);
//     });
// }

//Error handling
//const sendError = (err, res) =>{
    //response.status = 501;
    //response.message = typeof err == 'object' ? err.message : err;
    //res.status(501).json(response);
//};

//Response handling
// let response = {
//     status: 200,
//     data: [],
//     message: null
// }

//Get products: return all products
// router.get('/products', (req, res) => {
//     connection((db)=>{
//         db.collection('products')
//             .find()
//             .toArray()
//             .then((products )=>{
//                 response = products;
//                 res.json(response);
//             })
//             .catch((err)=>{
//                 sendError(err,res);
//             });
//     });
// });

//Get Products
router.get('/products', (req, res) => {
    db.products.find((err, products) => {
        if (err){
            res.send(err);
        }
        res.json(products);
    });
});
//Get Babykleding
router.get('/products/babykleding', (req, res) => {
    db.products.find({type: "babykleding"},(err, products) => {
        if (err){
            res.send(err);
        }
        res.json(products);
    });
});
//Get Zwangerschapskledij
router.get('/products/zwangershapskledij', (req, res) => {
    db.products.find({type: "zwangerschapskledij"},(err, products) => {
        if (err){
            res.send(err);
        }
        res.json(products);
    });
});

//Get a single product
router.get('/products/:id', (req, res) => {
    db.products.findOne({_id: mongojs.ObjectId(req.params.id)},(err, products) => {
        if (err){
            res.send(err);
        }
        res.json(products);
    });
});
//Add a product
router.post('/products', (req,res ) =>{
    var product = req.body;
    db.products.save(product, (req,res ) => {
        if(err){
            res.send(err);
        }
        res.json(product);
    });
});

//Delete a product
router.delete('/products/:id', (req, res) => {
    db.products.remove({_id: mongojs.ObjectId(req.params.id)},(err, products) => {
        if (err){
            res.send(err);
        }
        res.json(products);
    });
});

//Update a product
router.put('/products/:id', (req, res) => {
    var product = req.body;
    db.products.update({_id: mongojs.ObjectId(req.params.id)},product,{},(err, products) => {
        if (err){
            res.send(err);
        }
        res.json(product);
    });
});


module.exports = router;
