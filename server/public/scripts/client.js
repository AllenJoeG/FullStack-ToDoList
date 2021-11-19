$(document).ready(function(){
  console.log('jQuery: SCV Ready')
  getTasksAndRender();
});

function loadClickListeners() {
  
  //listeners for buttons
};

// function renderToDom(dbRows){
  
// };

//GET ROUTE
function getTasksAndRender(){
  //fetch dbRows from the database through the server!
  console.log('in getTasksAndRender()?')
  $.ajax({
    type: 'GET',
    url: '/tasks'
  }).then(function(response) {
    console.log('Fetched from DB:', response);
    renderTasks(response);
  }).catch(function(error){
    console.log('error in GET', error);
  });
  
};

function renderTasks(dbRows){  
  $('#taskList').empty();
// let bookRead = 'Not Read!'
  console.log(dbRows);
//select element, loop through dbRows, append
  for(let i = 0; i < dbRows.length; i += 1) {
    let task = dbRows[i];
    
    // For each task, append a new row to our table
    $('#taskList').append(`
      <tr>
        <td>${task.task}</td>
        <td>${task.details}</td>
        <td>${task.due}</td>
        <td>${task.notes}</td>
        <td>${task.inProgress}</td>
        <td>${task.isComplete}</td>
        <td><button class="readButton" data-id="${task.id}">Read It!</button></td>
        <td><button class="deleteButton" data-id="${task.id}">Delete</button></td>
      </tr>
    `);
  }
}

//POST ROUTE
function submitTaskInformation(){
  //package up and send newTaskObject to server for database
};

//PUT ROUTE
function markInProgress(){
  //AJAX and capture ID
};

//PUT ROUTE
function markComplete(){
  //AJAX and capture ID
}

//DELETE ROUTE
function deleteTask(){
  //AJAX and capture ID
}