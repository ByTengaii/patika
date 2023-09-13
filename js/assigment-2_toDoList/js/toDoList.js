const taskListDOM = document.getElementById('list');
const taskListStorage = localStorage.getItem('taskList');

const TOASTS = document.querySelectorAll('#liveToast');

// LOADER for task that already exist
document.addEventListener('DOMContentLoaded',() => {
    // Task List LOADER
    if (taskListStorage) {
        taskListDOM.innerHTML = JSON.parse(taskListStorage);
    }

    let liDOM = document.querySelectorAll("#list li");

    // Checked class add/remove
    liDOM.forEach((item) => {
        addCheck(item);
    });

    // Adding delete symbol and option
    liDOM.forEach(
        (item) => {
            addCross(item);
        }
    )

});

// ADD TASK btn
function newElement(){
    let TASK = document.getElementById('task');
    let taskValue = TASK.value.trim() // Trim to avoid from space characters task.
    if(taskValue)
    {
        $(TOASTS[0]).toast('show');
        addTask(taskValue);
        localStorage.setItem('taskList',JSON.stringify(taskListDOM.innerHTML));
    }else
        $(TOASTS[1]).toast('show');
    TASK.value = '';
    return;
}

function removeTask(task){
    task.remove();
    localStorage.setItem('taskList',JSON.stringify(taskListDOM.innerHTML));
}


function addTask(task){
    let liDOM = document.createElement('li');
    liDOM.textContent = task;
    addCross(liDOM);
    addCheck(liDOM);
    taskListDOM.appendChild(liDOM);
}

function addCross (item){
    let delSpan  = document.createElement('span');
    delSpan.innerHTML = "&times;";
    delSpan.classList.add('close');
    item.appendChild(delSpan);
    delSpan.addEventListener('click',() => {
        removeTask(item);
    })
}

function addCheck (item){
    item.addEventListener("click", () => {
        item.classList.toggle('checked');
        localStorage.setItem("taskList", JSON.stringify(taskListDOM.innerHTML));
    });
}

// Press ENTER for adding task
document.querySelector("#task").addEventListener("keypress", (event) => {
    if (event.key === "Enter") newElement();
});
