/*
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
      await note.remove(); // Assuming `remove` is a valid method on the note object
      res.json({ msg: 'Note removed' });
  } catch (err) {
      console.error('Error deleting note:', err);
      if (err.kind === 'ObjectId') {
          return res.status(404).json({ msg: 'Note not found' });
      }
      res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/:id', async (req, res) => {
    try {
      const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedNote) {
        return res.status(404).json({ msg: 'Note not found' });
      }
      res.json(updatedNote);
    } catch (error) {
      console.error('Error updating note:', error);
      if (error.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Note not found' });
      }
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

  
module.exports = router;
*/

const express = require('express');
const router = express.Router();
const Note = require('../../models/note.model');
const mongoose = require('mongoose');

// Create a route to get a specific note by its ID
router.get('/:id', async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ msg: 'Note not found' });
        }
        res.json(note);
    } catch (error) {
        console.error('Error fetching note:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

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
      await Note.deleteOne({ _id: req.params.id }); // Use Note.deleteOne() to delete the note
      res.json({ msg: 'Note removed' });
  } catch (err) {
      console.error('Error deleting note:', err);
      if (err.kind === 'ObjectId') {
          return res.status(404).json({ msg: 'Note not found' });
      }
      res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/:id', async (req, res) => {
  try {
      const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedNote) {
          return res.status(404).json({ msg: 'Note not found' });
      }
      res.json(updatedNote);
  } catch (error) {
      console.error('Error updating note:', error);
      res.status(500).json({ error: 'Failed to update item. Please try again.' });
  }
});

  
module.exports = router;
