const express = require('express');
const router = express.Router();
const Note = require('../../models/note.model');
//const bodyParser = require('body-parser');

router.post('/', (req, res) => {
    console.log('Request body:', req.body); // Log the request body
    Note.create(req.body)
        .then(note => res.status(201).json(note))
        .catch(err => {
            console.log(res);
            console.error('Error creating note:', err);
            res.status(400).json({ error: 'Unable to add this note' });
        });
});

router.delete('/:id', (req,res) => {
    Note.findByIdAndDelete(req.params.id)
    .then((item) => res.json({ mgs: 'Note entry deleted successfully'}))
    .catch((err) => res.status(404).json({ error: 'No such a item'})); 
 }); 

 /*
router.get('/', (req,res) => {
   Note.find()
   .then((items) => res.json(items))
   .catch((err) => res.status(404).json({ noitemfound: 'No notes found'})); 
}); 

router.get('/:id', (req,res) => {
   Note.findById(req.params.id) 
   .then((item) => res.json(item))
   .catch((err) => res.status(404).json({ noitemfound: 'No notes found'})); 
}); 

router.put('/:id', (req, res) => {
   Note.findByIdAndUpdate(req.params.id, req.body)
   .then((item) => res.json({ msg: 'Updated successfully'}))
   .catch((err) => 
    res.status(400).json({ error: 'Unable to update the Database'})); 
}); 
*/

module.exports = router;