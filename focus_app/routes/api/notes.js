const express = require('express');
const router = express.Router();
const Note = require('../../models/note.model');

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


module.exports = router;