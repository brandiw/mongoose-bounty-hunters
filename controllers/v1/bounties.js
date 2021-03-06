// Require needed modules
const express = require('express');

// Declare router instance
const router = express.Router();

// Include our models
const db = require('../../models');

// Define routes
router.get('/', (req, res) => {
  db.Bounty.find()
  .then(bounties => {
    res.send(bounties);
  })
  .catch(err => {
    console.log(err);
    res.status(500).send({ message: 'Server Error' });
  });
});

router.post('/', (req, res) => {
  db.Bounty.create(req.body)
  .then(bounty => {
    res.status(201).send(bounty);
  })
  .catch(err => {
    console.log(err);
    res.status(500).send({ message: 'Server Error' });
  });
});

router.get('/:id', (req, res) => {
  db.Bounty.findById(req.params.id)
  .then(bounty => {
    res.send(bounty);
  })
  .catch(err => {
    console.log(err);
    res.status(500).send({ message: 'Server Error' });
  });
});

router.put('/:id', (req, res) => {
  db.Bounty.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
  .then(editedBounty => {
    res.send(editedBounty);
  })
  .catch(err => {
    console.log(err);
    res.status(500).send({ message: 'Server Error' });
  });
});

router.delete('/:id', (req, res) => {
  db.Bounty.findOneAndDelete({ _id: req.params.id })
  .then(() => {
    res.status(204).send();
  })
  .catch(err => {
    console.log(err);
    res.status(500).send({ message: 'Server Error' });
  });
});

// Export this router to be included by index.js, or whatever else
module.exports = router;
