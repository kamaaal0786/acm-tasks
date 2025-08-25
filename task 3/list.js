// Get elements
const addbtn = document.getElementById("addbtn");
const taskinput = document.getElementById("taskinput");
const tasklist = document.getElementById("tasklist");

// Add task on button click
addbtn.addEventListener("click", addTask);

// Also allow pressing Enter to add task
taskinput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskText = taskinput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Create delete button
  const deletebtn = document.createElement("button");
  deletebtn.textContent = "Delete";
  deletebtn.classList.add("deletebtn");

  // Delete functionality
  deletebtn.addEventListener("click", function() {
    tasklist.removeChild(li);
  });

  // Append delete button to li
  li.appendChild(deletebtn);

  // Append li to ul
  tasklist.appendChild(li);

  // Clear input
  taskinput.value = "";
}
