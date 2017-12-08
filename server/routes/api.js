const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt-nodejs');
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
    db.products.findOne({_id: mongojs.ObjectId(req.params.id)},(err, product) => {
        if (err){
            res.send(err);
        }
        res.json(product);
    });
});
//Add a product
router.post('/products', (req,res ) =>{
    var product = req.body;
    db.products.save(product, (err,product ) => {
        if(err){
            res.send(err);
        }
        res.json(product);
    });
});

//Delete a product
router.delete('/products/:id', (req, res) => {
    db.products.remove({_id: mongojs.ObjectId(req.params.id)},(err, product) => {
        if (err){
            res.send(err);
        }
        res.json(product);
    });
});

//Update a product
router.put('/products/:id', (req, res) => {
    var product = req.body;
    db.products.update({_id: mongojs.ObjectId(req.params.id)},product,{},(err, product) => {
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
    db.users.findOne({_id: mongojs.ObjectId(req.params.id)},(err, user) => {
        if (err){
            res.send(err);
        }
        res.json(user);
    });
});
//Add a user
router.post('/users', (req,res ) =>{
    var user = req.body;
    
    bcrypt.hash(user.wachtwoord, null, null, (err, hash) => {
        console.log(hash);
        user.wachtwoord = hash;       
    });   
    db.users.save(user, (err,newUser) => {
        if(err){
            return res.status(500).send({message: 'Error saving user'});
        }
        createSendToken(res,newUser)
    });
});

//Deletes a user
router.delete('/users/:id', (req, res) => {
    db.users.remove({_id: mongojs.ObjectId(req.params.id)},(err, user) => {
        if (err){
            res.send(err);
        }
        res.json(user);
    });
});

//Update a user
router.put('/users/:id', (req, res) => {
    var user = req.body;
    db.users.update({_id: mongojs.ObjectId(req.params.id)},user,{},(err, user) => {
        if (err){
            res.send(err);
        }
        res.json(user);
    });
});
//Login a user
router.post('/users/login', (req, res) => {
    var loginData = req.body;
    db.users.findOne({email: loginData.email},(err, user) => {
        if (err){
            res.send(err);
        }
        if(!user){
            return res.status(401).send({message: 'Email or Password invalid'});            
        }
        bcrypt.compare(loginData.wachtwoord, user.wachtwoord, (err, isMatch) => {
            if (!isMatch){
                return res.status(401).send({message: 'Email or Password invalid'});
            }
            createSendToken(res,user);
        });          
    });   
});

function createSendToken(res, user){
    var payload = { sub: user._id};
    
    var token = jwt.encode(payload, '123');
    
    res.status(200).send({token: token, username: user.voornaam});
}

function checkAuthenticated(req, res, next){
    if(!req.header('authorization')){
        return res.status(401).send({message: 'Unauthorized. Missing Auth Header'});
    }
    var token = req.header('authorization').split(' ')[1];

    var payload = jwt.decode(token, '123');

    if (!payload){
        return res.status(401).send({message: 'Unauthorized. Auth Header Invalid'});
    }
    req.userId = payload.sub;

    next();
}

module.exports = router;
