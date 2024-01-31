const add = document.getElementById("addItem")

const input = document.getElementById("inputField")

const taskContainer = document.getElementById('taskListContainer')

add.addEventListener('click', function(){
    const task = document.createElement('div')
    const item = document.createElement('p')
    task.classList.add('task-list__task')
    item.classList.add('task-list__task__title');
    item.innerText = input.value
    task.appendChild(item)
    input.value = ""
    taskContainer.appendChild(task)
    
})

