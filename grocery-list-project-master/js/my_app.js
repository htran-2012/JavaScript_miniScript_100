(function(){
    
    //const form= document.querySelector('#input-form')
    const inputElement = document.querySelector('#input-value')
    const submitBtnElement = document.querySelector('[type = "submit"]')
    const feedbackElement = document.querySelector('.feedback')
    const listItems = document.querySelector('.list-items')
    const clearBtn = document.querySelector('.clearBtn')
    loadStorageItems()

    submitBtnElement.addEventListener('click', (e)=>{
        e.preventDefault()


        if(!inputElement.value){
            alertFeedback()
        }//end if
        else{
            addedItemFeedback()
            addItemToList(inputElement.value)
            addStorage(inputElement.value)

            inputElement.value = ''


        }//end else
    })//end submitBtn event

    //add an event to listItems
    // the trick is that you don't have to add event to exactly the trash btn
    // but use some condition in listItems
    // so as only when user click on the trash icon
    // then the event will trigger
    listItems.addEventListener('click', (e)=>{
        if(e.target.parentElement.classList.contains('remove-icon')){
            let itemRemove = e.target.parentElement.parentElement
            let itemRemoveName = itemRemove.firstElementChild.textContent

            listItems.removeChild(itemRemove)
            delItemFromStorage(itemRemoveName)
        }
    })

    clearBtn.addEventListener('click', (e)=>{
        while(listItems.children.length>0){
            listItems.removeChild(listItems.children[0])
        }     
        clearStorage()
    })

    function addItemToList(toDo){
        text = 
        `<div class="item my-3 d-flex justify-content-between p-2">
            <h5 class="item-title text-capitalize">${toDo}</h5>
            <span class="remove-icon text-danger"><i class="fas fa-trash"></i></span>
       </div>
        `
        pos = 'beforeend'
        listItems.insertAdjacentHTML(pos,text)
    }

    function alertFeedback(){
        feedbackElement.textContent = 'Please input an item'
        feedbackElement.classList.add('showItem', 'bg-danger')
        setTimeout(()=>{
            feedbackElement.classList.remove('showItem', 'bg-danger')
        },3000)
    }

    function addedItemFeedback(){
        feedbackElement.textContent = 'Item added to list'
        feedbackElement.classList.add('showItem', 'bg-info')
        setTimeout(()=>{
            feedbackElement.classList.remove('showItem', 'bg-info')
        },3000)

    }

    //storage manipulation
    function addStorage(value){
        let items
        if(localStorage.getItem('grocery-list')){
            items = JSON.parse(localStorage.getItem('grocery-list'))
        }else{
            items = []
        }
        items.push(value)
        localStorage.setItem('grocery-list', JSON.stringify(items));
        //console.log(localStorage)
    }
    

    function loadStorageItems(){
        if(localStorage.getItem('grocery-list')){
            const items = JSON.parse(localStorage.getItem('grocery-list'))
            items.forEach((item) => {
                text = 
            `<div class="item my-3 d-flex justify-content-between p-2">
            <h5 class="item-title text-capitalize">${item}</h5>
            <span class="remove-icon text-danger"><i class="fas fa-trash"></i></span>
            </div>
            `
            pos = 'beforeend'
            listItems.insertAdjacentHTML(pos,text)
            });
        }
    }

    function clearStorage(){
        let items = []
        //localStorage.setItem('grocery-list', JSON.stringify(items));
        localStorage.removeItem('grocery-list')
        //console.log(localStorage)
    }

    function delItemFromStorage(value){
        let storageItems = JSON.parse(localStorage.getItem('grocery-list'))
        let remainItems = storageItems.filter((item)=>{
            if(item != value){
                return item
            }
        })
        localStorage.setItem('grocery-list', JSON.stringify(remainItems))
        //console.log(localStorage)
    }
})()