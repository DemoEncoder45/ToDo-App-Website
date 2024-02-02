const add = document.getElementById("addItem")

const input = document.getElementById("inputField")

const taskContainer = document.getElementById('taskListContainer')

add.addEventListener('click', function(){
    const task = document.createElement('div')
    const item = document.createElement('p')
    
    const check = document.createElement('input')
    check.setAttribute('type', 'checkbox')
    check.setAttribute('data-is-task-complete', 'false')

    const buttons = document.createElement('div')
    const edit = document.createElement('button')
    
    const erase = document.createElement('button')
   
   
    task.classList.add('task-list__task')
    item.classList.add('task-list__task__title');
    check.classList.add('task-list__task__options__check-task')
    buttons.classList.add('task-list__task__options__buttons')
    edit.classList.add('button button--edit')
    erase.classList.add('button button--delete')

    item.innerText = input.value
    task.appendChild(item)
    input.value = ""
    taskContainer.appendChild(task)
    task.appendChild(check)
    buttons.appendChild(edit)
    buttons.appendChild(erase)
    
    
    

    
})

