const task = () => {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value;
    const tasksContainer = document.querySelector(".tasks-container");
    const newElement = document.createElement("div");
    newElement.classList.add("task-container");
    newElement.style.background = `hsl(${Math.random() * 360}, 90%, 70%)`;

    const taskSpan = document.createElement("p");
    taskSpan.textContent = taskText;
    newElement.appendChild(taskSpan);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        tasksContainer.removeChild(newElement);
    });
    newElement.appendChild(deleteButton);

    tasksContainer.append(newElement);

    taskInput.value = "";
    
}


document.getElementById("add-task-form").addEventListener("submit", function (event) {
    if(document.getElementById("task-input").value == '') {
        event.preventDefault();
        console.log("Wypełnij pole");
    }
    else {
    event.preventDefault();
    task();
    }
});