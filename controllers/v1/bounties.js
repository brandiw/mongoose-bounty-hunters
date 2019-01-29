// Require needed modules
const express = require('express');

// Declare router instance
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
  res.send('STUB!');
});

// Export this router to be included by index.js, or whatever else
module.exports = router;
