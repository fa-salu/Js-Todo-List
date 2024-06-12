function addTask() {
    var taskInput = document.getElementById("taskInput");
    var task = taskInput.value;
    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    var taskList = document.getElementById("taskList");

    var li = document.createElement("li");
    li.textContent = task;

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}
