const add = document.getElementById("addItem")

const input = document.getElementById("inputField")

const taskContainer = document.getElementById('taskListContainer')

const edit = document.getElementById("editButton")

const erase = document.getElementById("deleteButton")

add.addEventListener('click', function(){
    const item = document.createElement('p')
    const task = document.createElement('div')
    task.classList.add('task-styling')
    item.innerText = input.value
    task.appendChild(item)
    input.value = ""
    taskContainer.appendChild(task)
    
})

