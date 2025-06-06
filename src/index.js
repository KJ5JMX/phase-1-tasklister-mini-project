document.addEventListener("DOMContentLoaded", () => {
  // your code here



  //see when someone clicks create a new task

const form = document.getElementById("create-task-form");

form.addEventListener("submit", function(event){
  event.preventDefault(); 
  console.log("Form submitted");

 const taskDescription = document.getElementById("new-task-description").value;

  
  console.log("Task Description:", taskDescription);

  buildToDoList(taskDescription); // Call the function to build the to-do list item

  form.reset(); // Reset the form after submission because deleting after submission is LAME
});

function buildToDoList(taskDescription) {
  const listItem = document.createElement("li");
  listItem.textContent = taskDescription;
  const list = document.getElementById("tasks");
  list.appendChild(listItem);
}




});
