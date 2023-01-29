function addTask() {
    // Get task from input
    var task = document.getElementById("task").value;

    // Create new list item
    var li = document.createElement("li");
    li.innerHTML = task + '<button class="remove" onclick="removeTask(this)">Remove</button> <button class="complete" onclick="markComplete(this)">Complete</button>';

    // Add new item to task list
    document.getElementById("task-list").appendChild(li);

    // Clear input field
    document.getElementById("task").value = "";
}

function removeTask(el) {
    var li = el.parentElement;
    li.parentElement.removeChild(li);
}

function markComplete(el) {
    var li = el.parentElement;
    li.classList.toggle("completed");
}