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
//HELPER function for getTasksAndRender()
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
        <td><button class="readButton" data-id="${task.id}">DONE</button></td>
        <td><button class="deleteButton" data-id="${task.id}">Delete</button></td>
      </tr>
    `);
  }
}

//POST ROUTE
function submitTaskInformation(taskObject){
  //package up and send newTaskObject to server for database
  $.ajax({
    type: 'POST',
    url: '/tasks',
    data: taskObject,
    }).then(function(response) {
      console.log('Response from server.', response);
      getTasksAndRender();
    }).catch(function(error) {
      console.log('Error in POST', error)
      alert('Unable to add task at this time. Please try again later.');
    });
};
//HELPER function for packaging user inputs into data object
function packageUserInputs(){
  console.log('Submit button clicked.');

  //Conditional require both fields
  if ($('#taskIn').val() === '') {
    $('#taskIn').css("border", "3px solid red");
  } else if ($('#detailsIn').val() === ''){
    $('#detailsIn').css("border", "3px solid red");
  } else if ($('#taskIn').val() === '' || $('#detailsIn').val() === ''){
    return;
  } else {
  let task = {};
  task.task = $('#taskIn').val();
  task.details = $('#detailsIn').val();
  task.due = $('#dueIn').val();
  task.notes = $('#notesIn').val();
  submitTaskInformation(task);
  //Reset redborders on successful submit
  $('#taskIn').css("border", "1px solid black");
  $('#detailsIn').css("border", "1px solid black");
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
  const taskIdToDelete = $(this).data('id');
  $.ajax({
    type: 'DELETE',
    url: `/tasks/${taskIdToDelete}`
  }).then((response) => {
    console.log(response);
    getTasksAndRender();
  }).catch((error) => {
    console.log('Unable to delete Task, why? :', error);
  });
}