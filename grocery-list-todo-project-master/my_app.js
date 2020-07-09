
(function(){
    //console.log(window.localStorage)
    const form = document.querySelector('form')
    const inputElement = document.querySelector('.addItems-input')
    const groceryList = document.querySelector('.grocery-list')
    const addItemFeedback = document.querySelector('.addItems-action')
    const displayItemFeedback = document.querySelector('.displayItems-action')
    const clearItemsBtn = document.querySelector('.displayItems-clear')
    loadStorage()

    form.addEventListener('click', (e)=>{
        e.preventDefault()
        if(e.target.classList.contains('addItems-submit')){
            addElementToList(inputElement.value)
            addStorage(inputElement.value)
            inputElement.value = ''
        }
    })


    function addElementToList(toDo){
        if(toDo == ''){
            displayFeedback(addItemFeedback, 'Please enter a value', 'alert')

        }else{
            displayFeedback(addItemFeedback, `${toDo} added to list`, 'success')

            let newItem = document.createElement('div')
            newItem.classList.add('grocery-item')
            newItem.innerHTML = 
            `<h4 class="grocery-item__title">${toDo}</h4>
                <a href="#" class="grocery-item__link">
                    <i class="far fa-trash-alt"></i>
                </a> `
            groceryList.insertBefore(newItem, clearItemsBtn)
        }

    }

    groceryList.addEventListener('click', (e)=>{
        if(e.target.parentElement.classList.contains('grocery-item__link')){
            let itemRemove = (e.target.parentElement.parentElement)
            let itemRemoveName = (itemRemove.firstElementChild.textContent)
            groceryList.removeChild(itemRemove)

            displayFeedback(displayItemFeedback, `${itemRemoveName} removed from list`, 'success')
            removeFromStorage(itemRemoveName)
        }
    })

    clearItemsBtn.addEventListener('click',()=>{
        while(groceryList.children.length>0){
            groceryList.removeChild(groceryList.children[0])
            displayFeedback(displayItemFeedback, 'All items deleted', 'success')
            
        }
        clearStorage()
        if(groceryList.children.length == 0){
            displayFeedback(displayItemFeedback, 'No more item to delete', 'alert')
        }
    })

    function displayFeedback(element, message, className){
        element.textContent = message
        element.classList.add(className)
        setTimeout(()=>{
            element.classList.remove(className)
        },2000)
    }


    function addStorage(value){
        let items 
        if(localStorage.getItem('grocery-list')){
            items = JSON.parse(localStorage.getItem('grocery-list'))
        }else{
            items = []
        }
        items.push(value);
        localStorage.setItem('grocery-list', JSON.stringify(items));
    }

    function loadStorage(){
        if(localStorage.getItem('grocery-list')){
            const items = JSON.parse(localStorage.getItem('grocery-list')) 
            items.forEach((item)=>{
                let newItem = document.createElement('div')
                newItem.classList.add('grocery-item')
                newItem.innerHTML = 
                `<h4 class="grocery-item__title">${item}</h4>
                    <a href="#" class="grocery-item__link">
                        <i class="far fa-trash-alt"></i>
                    </a> `
                groceryList.appendChild(newItem)
            })           
        }
    }

    function removeFromStorage(value){
        const tempitems = JSON.parse(localStorage.getItem('grocery-list'))
        const items =tempitems.filter((item)=>{
            if(item!=value){
                return item
            }
        })
        localStorage.removeItem('grocery-list');
        localStorage.setItem('grocery-list', JSON.stringify(items));
    }

    function clearStorage(){
        localStorage.removeItem('grocery-list')
    }
})()