const buttonTaskAdd = document.getElementById("btn1");
const tasksElementDiv = document.getElementById("dv1");

function updateTasksCount(tasks_count) {
    localStorage.setItem("tasks_count", tasks_count);
}

function toggleTaskStatus(event) {
    const done_button = event.currentTarget;
    
    if (done_button.textContent === "✓") {
        done_button.textContent = "✗";
        done_button.classList.remove("doneTask_style");
        done_button.classList.add("notDoneTask_style");
    } else {
        done_button.textContent = "✓";
        done_button.classList.remove("notDoneTask_style");
        done_button.classList.add("doneTask_style");
    }
}

function create_element() {
    let tasks_count = parseInt(localStorage.getItem("tasks_count") || 0);
    
    const task_div = document.createElement("div");
    task_div.classList.add("inputsClass_style");
    
    const delete_button = document.createElement("button");
    delete_button.textContent = "Удалить";
    delete_button.classList.add("buttonDelete_style");
    
    tasks_count++;
    updateTasksCount(tasks_count);
    
    const number_task = document.createElement("p");
    number_task.classList.add("p1_style");
    number_task.textContent = tasks_count;
    
    const task = document.createElement("input");
    task.placeholder = "Укажите задачу";
    task.classList.add("input_style");
    
    const done_button = document.createElement("button");
    done_button.classList.add("doneTask_style");
    done_button.textContent = "✓";
    
    task_div.appendChild(number_task);
    task_div.appendChild(task);
    task_div.appendChild(done_button);
    task_div.appendChild(delete_button);
    tasksElementDiv.appendChild(task_div);
    
    done_button.addEventListener("click", toggleTaskStatus);
    
    delete_button.addEventListener("click", () => {
        task_div.remove();
    });
}

buttonTaskAdd.addEventListener("click", create_element);
