let input = document.querySelector('#input')
let addTask = document.querySelector('#addBtn')
let list = document.querySelector('#list')


addTask.addEventListener('click', function(){
    if(input.value === '') return
    addBtn()
    input.value = ''
})

function addBtn(){
    const li = document.createElement('li')
    const checkbox = document.createElement('input')
    const delTask = document.createElement('button')
    
    li.className = 'li'
    li.textContent = input.value
    li.style.color = 'white'
    li.style.textAlign = 'center'
    li.style.listStyle = 'none'
    checkbox.className = 'checkbox'
    checkbox.type = 'checkbox'
    delTask.className = 'delBtn'
    delTask.textContent = 'X'


    list.append(li)
    li.append(delTask)
    li.append(checkbox)

    checkbox.addEventListener('click', (e) => {
        e.target.parentElement.classList.toggle('checkbox')
    })

    delTask.addEventListener('click', (e) => {
        e.target.parentElement.remove();
})

}
