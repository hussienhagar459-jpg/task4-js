
let tasks = [
    { taskName: "Gym", taskDesc: "Play cardio", taskStatus: true },
    { taskName: "Cinema", taskDesc: "Watch movie", taskStatus: true },
    { taskName: "Study", taskDesc: "Do math homework", taskStatus: false }
];


let tableBody = document.querySelector("#tableBody");
let inputTaskName = document.querySelector("#taskName");
let inputTaskDesc = document.querySelector("#taskDescription");
let addTaskBtn = document.querySelector("#addTask");


function displayTasks(tasksList) {
    tableBody.innerHTML = '';

    tasksList.forEach((task, index) => {

        let originalIndex = tasks.indexOf(task);

        tableBody.innerHTML += `
            <tr>
                <th scope="row">${index + 1}</th>
                <td style="text-decoration: ${task.taskStatus ? "line-through" : "none"}">${task.taskName}</td>
                <td>${task.taskDesc}</td>
                <td class="text-${task.taskStatus ? "success" : "danger"}">
                    ${task.taskStatus ? "completed" : "waiting"}
                </td>
                <td class="d-flex gap-2">
                    <!-- زر تغيير الحالة (Toggle) -->
                    <button class="btn btn-sm btn-info" onclick="toggleStatus(${originalIndex})">
                        Status
                    </button>
                    
                    <!-- زر الحذف -->
                    <button class="btn btn-danger" onclick="deleteTask(${originalIndex})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M16 9v10H8V9zm-1.5-6h-5l-1 1H5v2h14V4h-3.5zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2z" />
                        </svg>
                    </button>
                    
                    <!-- زر التعديل -->
                    <button class="btn btn-warning" onclick="updateTask(${originalIndex})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M18.925 3.137a3.027 3.027 0 0 0-4.283.001l-9.507 9.52a3.03 3.03 0 0 0-.885 2.139V18c0 .414.336.75.75.75h3.223c.803 0 1.573-.32 2.14-.887l9.5-9.506a3.03 3.03 0 0 0 0-4.28zM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5z" />
                        </svg>
                    </button>
                </td>
            </tr>
        `;
    });
}


displayTasks(tasks);


addTaskBtn.addEventListener('click', () => {
    let name = inputTaskName.value;
    let desc = inputTaskDesc.value;

    if (name.trim() !== "" && desc.trim() !== "") {
        let newTask = {
            taskName: name,
            taskDesc: desc,
            taskStatus: false
        };
        tasks.push(newTask);
        displayTasks(tasks);


        inputTaskName.value = "";
        inputTaskDesc.value = "";
    } else {
        alert("Please fill all fields!");
    }
});


function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks(tasks);
}


function updateTask(index) {
    let newName = prompt("Enter new task name:", tasks[index].taskName);
    let newDesc = prompt("Enter new task description:", tasks[index].taskDesc);

    if (newName && newDesc) {
        tasks[index].taskName = newName;
        tasks[index].taskDesc = newDesc;
        displayTasks(tasks);
    }
}


function toggleStatus(index) {
    tasks[index].taskStatus = !tasks[index].taskStatus;
    displayTasks(tasks);
}


function filterTasks(taskCategory) {
    if (taskCategory === "completed") {
        let completedTasks = tasks.filter((task) => {
            return task.taskStatus === true;
        });
        displayTasks(completedTasks);
    } else if (taskCategory === "waiting") {
        let waitingTasks = tasks.filter((task) => {
            return task.taskStatus === false;
        });
        displayTasks(waitingTasks);
    }
}


document.querySelector("#All").addEventListener("click", () => {
    displayTasks(tasks);
});

document.querySelector("#Completed").addEventListener('click', () => {
    filterTasks("completed");
});

document.querySelector("#Waiting").addEventListener('click', () => {
    filterTasks("waiting");
});
