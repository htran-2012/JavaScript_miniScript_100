const form = document.querySelector('#itemForm')
const feedback = document.querySelector('.feedback')
const inputElement = document.querySelector('#itemInput')
const itemListElement = document.querySelector('.item-list')
const addBtn =document.querySelector('[type="submit"]')
const clearBtn = document.querySelector('#clear-list')
let LIST = []
id = 0


function addNewItem(toDo, id, done, trash){
    if(trash){return}
    let DONE = done? 'completed': ''
    const text = 
        `<div class="item my-3">
            <h5 class="item-name text-capitalize ${DONE}">${toDo}</h5>
            <div class="item-icons">
                <a href="#" class="complete-item mx-2 item-icon"  ><i id=${id} job = "complete" class="far fa-check-circle"></i></a>
                <a href="#" class="edit-item mx-2 item-icon" ><i id=${id} job="edit" class="far fa-edit"></i></a>
                <a href="#" class="delete-item item-icon"><i id=${id}  job = "delete" class="far fa-times-circle"></i></a>
            </div>
        </div>
        `
    const pos = 'beforeend'
    itemListElement.insertAdjacentHTML(pos, text)
}

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    let toDo = inputElement.value
    if(toDo){
        addNewItem(toDo, id, false, false)
        LIST.push({
            name: toDo,
            id: id,
            done: false,
            trash: false
        })
        inputElement.value = ''
        id++
    }

    localStorage.setItem('TODO', JSON.stringify(LIST))
})


itemListElement.addEventListener('click', (e)=>{
    let element = e.target
    const elementJob = e.target.attributes.job.value

    
    if(elementJob =="complete"){
        let h5tag = element.parentNode.parentNode.previousElementSibling
        h5tag.classList.toggle('completed')
        element.classList.toggle('visibility')
        LIST[element.id].done = LIST[element.id].done? false:true;
    }

    else if(elementJob =="delete"){
        let removeElement = (element.parentNode.parentNode.parentNode)
        itemListElement.removeChild(removeElement)
        LIST[element.id].trash = true

    }

    else if(elementJob == "edit"){
        let h5tag = element.parentNode.parentNode.previousElementSibling
        let removeElement = (element.parentNode.parentNode.parentNode)
        itemListElement.removeChild(removeElement)
        inputElement.value = (h5tag.textContent)
        LIST[element.id].trash = true
    }
    localStorage.setItem('TODO', JSON.stringify(LIST))

})

let data = localStorage.getItem("TODO")

if (data){
    LIST = JSON.parse(data)
    id = LIST.length
    loadToDo(LIST)
}
else{
    LIST = []
    id = 0
}

function loadToDo(array){
    array.forEach((item)=>{
        addNewItem(item.name, item.id, item.done, item.trash)
    })
}

clearBtn.addEventListener('click', ()=>{
    localStorage.clear();
    location.reload()
})