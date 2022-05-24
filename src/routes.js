const express = require('express');
//modulo router
const router = express.Router();

const Form = require('./models/form');

//db routes
router.get('/api/forms', async(req, res) =>{
     const forms = await Form.find();
     res.json(forms);
});

//prueba de ingreso con Postman. asi se guarda en DB
router.post('/api/forms', async(req, res) =>{
    const { nombre, email, programa } = req.body;
    const newForm = new Form({ nombre, email, programa })
    await newForm.save();
    res.send({'message' : 'Form saved'});
});

//prueba de delete con Postman. asi se guarda en DB
router.delete('/api/forms/:id', async(req, res) =>{
    await Form.findByIdAndDelete(req.params.id);
    res.send({'message' : 'Form deleted'});
});


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

router.get('/programs', (req, res) =>{
    res.render('programs.html', {title: 'Programas'});
});

//exporto modulo router
module.exports = router;