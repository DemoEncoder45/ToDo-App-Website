import EZStorage from "./lib/EZStorage.js"

const add = document.getElementById("addItem")

const erase = document.getElementById('deleteItem')

const input = document.getElementById("inputField")

const taskContainer = document.getElementById('taskListContainer')


const storage = new EZStorage(window.localStorage);

function createTaskElement (taskName) {
    const task = document.createElement('div')
    const item = document.createElement('p')
    const taskListOptions = document.createElement('div');
    const check = document.createElement('input')
    check.setAttribute('type', 'checkbox')
    check.setAttribute('data-is-task-complete', 'false')

    const buttons = document.createElement('div')
    const edit = document.createElement('button')
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

}

add.addEventListener('click' ,function () {
    createTaskElement(input.value);
    storage.addItem(input.value);

    input.value = "";
})

erase.addEventListener('click', function(){
    
})


function displayAllTask (){

     let taskList = storage.getAllItem()

     taskList.forEach(function(task){
        const taskTitle = task.itemTitle;
        createTaskElement(taskTitle);
     })

   
}

displayAllTask();