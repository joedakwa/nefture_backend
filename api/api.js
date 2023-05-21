// backend/api.js
const express = require('express');
const router = express.Router();
const pool = require('./db');

// Define the API endpoints
router.post('/registerCreature', (req, res) => {
    const { name, type, attack, defense, speed } = req.body;

    // Execute the query to insert a new creature into the database
  const query = 'INSERT INTO creatures (name, type, power) VALUES (?, ?, ?)';
  const values = [name, type, power];

  pool.query(query, values, (err, result) => {
    if (err) {
      console.error('Error while registering the creature:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json({ message: 'Creature registered successfully' });
    }
  });
  // Implement the logic for registering a creature
});

router.get('/getCreature/:creatureId', (req, res) => {
  // Implement the logic for retrieving a creature
});

router.post('/attack', (req, res) => {
  // Implement the logic for performing an attack
});

// Export the router
module.exports = router;
