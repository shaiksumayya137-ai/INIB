let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(task);
    saveTasks();

    input.value = "";
    displayTasks();
}

function displayTasks() {
    const pendingTasks = document.getElementById("pendingTasks");
    const completedTasks = document.getElementById("completedTasks");

    pendingTasks.innerHTML = "";
    completedTasks.innerHTML = "";

    tasks.forEach(function(task) {
        const li = document.createElement("li");

        const text = document.createElement("span");
        text.className = "task-text";

        if (task.completed) {
            text.classList.add("completed");
        }

        text.textContent = task.text;

        const completeButton = document.createElement("button");
        completeButton.textContent = task.completed ? "Undo" : "Complete";
        completeButton.className = "task-button complete-btn";
        completeButton.onclick = function() {
            toggleTask(task.id);
        };

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "task-button edit-btn";
        editButton.onclick = function() {
            editTask(task.id);
        };

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "task-button delete-btn";
        deleteButton.onclick = function() {
            deleteTask(task.id);
        };

        li.appendChild(text);
        li.appendChild(completeButton);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        if (task.completed) {
            completedTasks.appendChild(li);
        } else {
            pendingTasks.appendChild(li);
        }
    });
}

function toggleTask(id) {
    const task = tasks.find(function(task) {
        return task.id === id;
    });

    task.completed = !task.completed;

    saveTasks();
    displayTasks();
}

function editTask(id) {
    const task = tasks.find(function(task) {
        return task.id === id;
    });

    const newText = prompt("Edit your task:", task.text);

    if (newText !== null && newText.trim() !== "") {
        task.text = newText.trim();
        saveTasks();
        displayTasks();
    }
}

function deleteTask(id) {
    tasks = tasks.filter(function(task) {
        return task.id !== id;
    });

    saveTasks();
    displayTasks();
}

displayTasks();