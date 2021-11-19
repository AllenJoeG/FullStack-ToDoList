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
router.post('/',  (req, res) => {
  let newTask = req.body;
  console.log(`Adding task`, newTask);
  const queryValues = [
    newTask.task,
    newTask.details,
    newTask.due,
    newTask.notes
  ];

  const queryText = `
    INSERT INTO "tasks" 
      ("task", "details", "due", "notes", "inProgress", "isComplete") 
    VALUES 
      ($1, $2, $3, $4, false, false);
    `;
  pool.query(queryText, queryValues)
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new book`, error);
      res.sendStatus(500);
    });
});


//PUT ROUTE - progress



//PUT ROUTE - completion


//DELETE ROUTE
router.delete('/:id', (req, res) => {
  console.log('in /tasks/:id DELETE route', req.params);
  const taskIdToDelete = req.params.id;
  const sqlValues = [taskIdToDelete];
  const sqlText = `
    DELETE FROM "tasks"
      WHERE "id"=$1;
  `;
  //Query the DB with above instructions
  pool.query(sqlText, sqlValues)
  .then((dbResult) => {
    console.log('Delete confirmed:', req.params.id)
    res.sendStatus(200);
  }).catch((dbErr) => {
    console.error('issue hitting DB', dbErr);
    res.sendStatus(500);
  });
});

module.exports = router;
