let express = require('express');
let router = express.Router();

/* GET home page. */
module.exports.displayHome = (req, res, next)=>{
    res.render('index', {title: 'Home'});
  };

module.exports.displayAbout = (req, res, next)=>{
    res.render('index', {title: 'About'});
  };
/* GET products page. */
module.exports.displayProducts = (req, res, next)=>{
    res.render('index', {title: 'Products'});
  };

module.exports.displayService = (req, res, next)=>{
    res.render('index', {title: 'Service'});
  };

module.exports.displayContact = (req, res, next)=> {
    res.render('index', {title: 'Contact us'});
  }