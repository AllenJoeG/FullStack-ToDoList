//Requirements
const express = require('express');
const taskRouter = require('./routes/task.router.js');

//Aliases
const PORT = process.env.PORT || 5000;
const app = express();

//Express initializations
app.use(express.urlencoded({extended: true}));
app.use(express.static('server/public'))

//Routes
app.use('/tasks', taskRouter);

//Main Screen Turn On
app.listen(PORT, () => {
  console.log('Welcome to the internet, here are your sunglasses.');
  console.log('Server listening on port:', PORT);
});