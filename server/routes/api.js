const express = require('express');
const router = express.Router();
const mongojs =require('mongojs');
const db = mongojs('mongodb://user:user@ds227045.mlab.com:27045/gettingstarted');

//PRODUCTS

//Get All Products
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

//USERS

//Get All Users
router.get('/users', (req, res) => {
    db.users.find((err, users) => {
        if (err){
            res.send(err);
        }
        res.json(users);
    });
});

//Get a single user
router.get('/users/:id', (req, res) => {
    db.users.findOne({_id: mongojs.ObjectId(req.params.id)},(err, users) => {
        if (err){
            res.send(err);
        }
        res.json(users);
    });
});
//Add a user
router.post('/users', (req,res ) =>{
    var user = req.body;
    db.users.save(user, (req,res ) => {
        if(err){
            res.send(err);
        }
        res.json(user);
    });
});

//Deletes a user
router.delete('/users/:id', (req, res) => {
    db.users.remove({_id: mongojs.ObjectId(req.params.id)},(err, users) => {
        if (err){
            res.send(err);
        }
        res.json(users);
    });
});

//Update a user
router.put('/users/:id', (req, res) => {
    var user = req.body;
    db.users.update({_id: mongojs.ObjectId(req.params.id)},user,{},(err, users) => {
        if (err){
            res.send(err);
        }
        res.json(user);
    });
});
//Login a user
router.post('/users/login', (req, res) => {
    console.log(req.body);
    var user = req.body;
    db.users.findOne({email: user.email},(err, users) => {
        if (err){
            res.send(err);
        }
        res.json(user);
    });
});

module.exports = router;
