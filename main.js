const add = document.getElementById("addItem")

const input = document.getElementById("inputField")

const taskContainer = document.getElementById('taskListContainer')

add.addEventListener('click', function(){
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
    
    edit.append("edit");
    erase.append("delete");

    item.innerText = input.value

    

    task.appendChild(item)

    input.value = ""

    taskContainer.appendChild(task)

    erase.appendChild(eraseIcon, "delete")
    edit.appendChild(editIcon, "edit")
    buttons.appendChild(edit)
    buttons.appendChild(erase) 
    
   
    taskListOptions.appendChild(check);
    taskListOptions.appendChild(buttons);
    task.appendChild(taskListOptions);
})

