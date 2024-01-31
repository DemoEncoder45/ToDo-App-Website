const add = document.getElementById("addItem")

const input = document.getElementById("inputField")

add.addEventListener('click', function(){
    const item = document.createElement('p')
    const task = document.createElement('div')
    item.innerText = inputField.value
    task.appendChild(item)
    inputField.value = ""
})