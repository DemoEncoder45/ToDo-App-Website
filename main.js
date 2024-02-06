import EZStorage from "./lib/EZStorage.js"

const add = document.getElementById("addItem")

const input = document.getElementById("inputField")

const taskContainer = document.getElementById('taskListContainer')


const storage = new EZStorage(window.localStorage);

function createTaskElement (taskName, id,taskState) {
    const task = document.createElement('div')
    task.setAttribute('data-task-id', id);
    

    const item = document.createElement('p')
    item.setAttribute('data-is-task-complete',taskState);
    const taskListOptions = document.createElement('div');
    const check = document.createElement('input')
    check.setAttribute('type', 'checkbox')
    check.setAttribute('data-is-task-complete',taskState)
    check.setAttribute('data-task-id',id)

    const buttons = document.createElement('div')
    const edit = document.createElement('button')
    edit.setAttribute("data-task-id", id)
    const editIcon = document.createElement('img')
    const erase = document.createElement('button')
    const eraseIcon = document.createElement('img')

   
   
    task.classList.add('task-list__task')
    taskListOptions.classList.add("task-list__task__options");
    item.classList.add('task-list__task__title');
    check.classList.add('task-list__task__options__check-task')
    buttons.classList.add('task-list__task__options__buttons')

    edit.setAttribute('class','button button--edit')
    erase.setAttribute('class','button button--delete')
    

    eraseIcon.src = './assets/delete-icon.svg';
    editIcon.src = './assets/edit-icon.svg';    

    item.innerText = taskName;

    task.appendChild(item)

    taskContainer.appendChild(task)

    erase.append(eraseIcon, "delete")
    edit.append(editIcon, "edit")
    buttons.appendChild(edit)
    buttons.appendChild(erase) 
    
   
    taskListOptions.appendChild(check);
    taskListOptions.appendChild(buttons);
    task.appendChild(taskListOptions);

    erase.addEventListener('click', function(){
        const checkedTask = document.querySelector(`div[data-task-id="${id}"]`)

        taskContainer.removeChild(checkedTask)

        storage.deleteItem(id)

    })

    check.addEventListener('click',function(){
        if(this.dataset.isTaskComplete === "true"){
            storage.removeCheckItem(this.dataset.taskId);
            this.parentElement.previousElementSibling.dataset.isTaskComplete = "false";
            this.dataset.isTaskComplete = "false";
        }
        else {
            storage.checkItem(this.dataset.taskId);
            this.parentElement.previousElementSibling.dataset.isTaskComplete = "true";
            this.dataset.isTaskComplete = "true";
        }
    })

    edit.addEventListener('click', function(){
        const newTaskTitleValue = prompt("Type the new Name of the Task Here!");

        storage.editItem(this.dataset.taskId, newTaskTitleValue)

        




    })

}

add.addEventListener('click' ,function () { 
    createTaskElement(input.value,storage.getId(),"false");

    storage.addItem(input.value);

    input.value = "";
})




function displayAllTask (){

     let taskList = storage.getAllItem()

     taskList.forEach(function(task){
        const taskTitle = task.itemTitle;
        const taskId = task.itemId;
        const taskState = task.checked;
        createTaskElement(taskTitle,taskId,taskState);
     })
}

displayAllTask();