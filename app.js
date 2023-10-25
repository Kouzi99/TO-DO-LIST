// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Add task when clicking the "Add Task" button
addTaskButton.addEventListener("click", addTask);

// Add task when pressing Enter in the input field
taskInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText) {
        // Create a new task item
        const taskItem = document.createElement("li");
        taskItem.innerText = taskText;

        // Add a button to remove the task
        const removeButton = document.createElement("button");
        removeButton.classList.add("button-13")
        removeButton.innerText = "Remove";
        removeButton.addEventListener("click", function () {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = "";
    }
}

