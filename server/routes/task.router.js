const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

//GET ROUTE
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "tasks" ORDER BY "id";`;
  // Query the DB table 'tasks'
  pool.query(queryText).then(result => {
    console.log(result.rows);
    // Sends back the results in an object
    res.send(result.rows);
  })
  .catch((dbErr) => {
    console.log('Error fetching tasks:', error);
    res.sendStatus(500);
  });
});



//POST ROUTE
// router.post('/tasks', (req, res) => {

// }).then((dbResponse) => {

// }).catch((dbErr) => {

// });


//PUT ROUTE - progress



//PUT ROUTE - completion


//DELETE ROUTE



module.exports = router;
