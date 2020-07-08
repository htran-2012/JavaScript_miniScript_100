const form = document.querySelector('#itemForm')
const feedback = document.querySelector('.feedback')
const inputElement = document.querySelector('#itemInput')
const itemListElement = document.querySelector('.item-list')
const addBtn =document.querySelector('[type="submit"]')
const clearBtn = document.querySelector('#clear-list')
let LIST = []
let id = 0

let codeBlock = 
`<div class="item my-3">
            <h5 class="item-name text-capitalize">laundry</h5>
            <div class="item-icons">
                <a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a>
                <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
                <a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
            </div>
        </div>
`

function addNewItem(toDo, id,done,trash){
    if(trash) {return}

    const LINE = done? 'completed': '';
    const text = 
        `<div class="item my-3">
            <h5 class="item-name text-capitalize ${LINE}">${toDo}</h5>
            <div class="item-icons">
                <a href="#" class="complete-item mx-2 item-icon" job = "complete" id= ${id}><i class="far fa-check-circle"></i></a>
                <a href="#" class="edit-item mx-2 item-icon" job="edit" id= ${id}><i class="far fa-edit"></i></a>
                <a href="#" class="delete-item item-icon" job = "delete" id= ${id}><i class="far fa-times-circle"></i></a>
            </div>
        </div>
        `
    const pos = 'beforeend'
    itemListElement.insertAdjacentHTML(pos, text)
}

form.addEventListener('click', (e)=>{
    e.preventDefault()
    const toDo = inputElement.value
    if(toDo, id, false){
        addNewItem(toDo)
        LIST.push({
            name:toDo,
            id: id,
            done: false,
            trash: false,
        })

    }
    inputElement.value = ''
    id++

})

function completeToDo(element){
    element.parentNode.previousSibling.classList.toggle('completed')
    LIST[element.id].done = LIST[element.id].done? false: true;
}

function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode)
    LIST[element.id].trash = true
}

itemListElement.addEventListener('click', function(event){
    let element = event.target
    const elementJob = event.target.attributes.job.value
    if(elementJob == "complete"){
        completeToDo()
    }
    else if(elementJob == "delete"){
        removeToDo()
    }
})