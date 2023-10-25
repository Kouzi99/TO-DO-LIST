// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Load tasks from local storage when the page loads
document.addEventListener("DOMContentLoaded", loadTasks);

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
        removeButton.classList.add("button-13");
        removeButton.innerText = "Remove";
        removeButton.addEventListener("click", function () {
            taskList.removeChild(taskItem);
            updateLocalStorage();
        });

        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = "";

        // Update local storage (excluding the "Remove" button text)
        updateLocalStorage();
    }
}

// Load tasks from local storage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(function (taskText) {
        // Create a new task item
        const taskItem = document.createElement("li");
        taskItem.innerText = taskText;

        // Add a button to remove the task
        const removeButton = document.createElement("button");
        removeButton.classList.add("button-13");
        removeButton.innerText = "Remove";
        removeButton.addEventListener("click", function () {
            taskList.removeChild(taskItem);
            updateLocalStorage();
        });

        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);
    });
}

// Update local storage with the current tasks (excluding the "Remove" button text)
function updateLocalStorage() {
    const tasks = [];
    const taskItems = document.querySelectorAll("li");
    taskItems.forEach(function (taskItem) {
        tasks.push(taskItem.innerText.replace("Remove", "").trim());
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}


