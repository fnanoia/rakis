const express = require('express');
//modulo router
const router = express.Router();

//routes
router.get('/', (req, res) =>{
    res.render('index.html', {title: 'Home page'});
});

router.get('/services', (req, res) =>{
    res.render('services.html', {title: 'Our services'});
});

router.get('/contact', (req, res) =>{
    res.render('contact.html', {title: 'Contact page'});
});

//exporto modulo router
module.exports = router;