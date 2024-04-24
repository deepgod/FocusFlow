const express = require('express');
const router = express.Router();
const Note = require('../../models/note.model');

router.post('/', (req, res) => {
    console.log('Request body:', req.body);
    Note.create(req.body)
        .then(note => res.status(201).json(note))
        .catch(err => {
            console.log(res);
            console.error('Error creating note:', err);
            res.status(400).json({ error: 'Unable to add this note' });
        });
});

router.get('/', async (req, res) => {
    try {
      const items = await Note.find();
      res.json(items);
    } catch (error) {
      console.error('Error fetching items:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/:id', async (req, res) => {
  try {
      const note = await Note.findById(req.params.id);
      if (!note) {
          return res.status(404).json({ msg: 'Note not found' });
      }
      await note.remove();
      res.json({ msg: 'Note removed' });
  } catch (err) {
      console.error('Error deleting note:', err);
      if (err.kind === 'ObjectId') {
          return res.status(404).json({ msg: 'Note not found' });
      }
      res.status(500).json({ error: 'Internal server error' });
  }
});

  
module.exports = router;