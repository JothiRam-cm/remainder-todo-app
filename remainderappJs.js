// remainderappJs.js

var reminders = []; // Array to store set reminders
var todos = []; // Array to store todo tasks

function setReminder() {
    var reminderInput = document.getElementById("reminderInput").value;
    var datetimeInput = document.getElementById("datetimeInput").value;
    var alertMessage = document.getElementById("alertMessage");

    if (reminderInput.trim() === "" || datetimeInput.trim() === "") {
        alertMessage.innerHTML = "Please enter a reminder and select a date/time.";
    } else {
        var reminder = {
            text: reminderInput,
            datetime: datetimeInput
        };

        reminders.push(reminder); // Add reminder to the array

        // Display the reminder in the list
        updateReminderList(); // Update the displayed reminder list

        // Set a timeout to display the reminder message at the specified date and time
        setTimeout(function() {
            alert("Reminder: " + reminderInput);
            alertMessage.innerHTML = "Reminder set: " + reminderInput + " at " + datetimeInput;
        }, new Date(datetimeInput).getTime() - new Date().getTime());
    }
}

function addTodo() {
    var todoInput = document.getElementById("todoInput").value;
    var todoList = document.getElementById("todoList");

    if (todoInput.trim() === "") {
        alert("Please enter a todo task.");
    } else {
        var todo = {
            text: todoInput,
            completed: false
        };

        todos.push(todo); // Add todo to the array

        // Display the todo task in the list with a checkbox
        updateTodoList(); // Update the displayed todo list
    }
}

function completeTodo(index) {
    todos[index].completed = !todos[index].completed; // Toggle the completion status
    updateTodoList(); // Update the displayed todo list
}

function updateReminderList() {
    var reminderList = document.getElementById("reminderList");
    reminderList.innerHTML = ""; // Clear the reminder list

    // Display the updated list of reminders
    for (var i = 0; i < reminders.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = `Reminder: ${reminders[i].text} at ${reminders[i].datetime}`;
        reminderList.appendChild(listItem);
    }
}

function updateTodoList() {
    var todoList = document.getElementById("todoList");
    todoList.innerHTML = ""; // Clear the todo list

    // Display the updated list of todo tasks
    for (var i = 0; i < todos.length; i++) {
        var listItem = document.createElement("li");
        listItem.innerHTML = `<input type="checkbox" id="checkbox_${i}" onchange="completeTodo(${i})" ${todos[i].completed ? 'checked' : ''}>
                              <label for="checkbox_${i}" ${todos[i].completed ? 'style="text-decoration: line-through;"' : ''}>${todos[i].text}</label>`;
        todoList.appendChild(listItem);
    }
}
function toggleMenu() {
    const menuButton = document.querySelector('.menu-button');
    menuButton.classList.toggle('show-menu');
}
// Call the update functions when the page loads
window.onload = function() {
    updateReminderList();
    updateTodoList();
};