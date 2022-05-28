const express = require('express');
//modulo router
const router = express.Router();

const Form = require('./models/form');

//routes
/*router.get('/', (req, res) =>{
    res.render('index.html', {title: 'Home page'});
});*/

//db routes
router.get('/', async(req, res) =>{
     const forms = await Form.find();
     res.json(forms);
});

//post form
router.post('/', async(req, res) =>{
    const { nombre, email, programa } = req.body;
    const newForm = new Form({ nombre, email, programa })
    await newForm.save();
    res.send({'message' : 'Form saved'});
});

//delete form
router.delete('/:id', async(req, res) =>{
    await Form.findByIdAndDelete(req.params.id);
    res.send({'message' : 'Form deleted'});
});



//exporto modulo router
module.exports = router;