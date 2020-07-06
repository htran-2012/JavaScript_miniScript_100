//function for filter button

(function(){
    const buttons = document.querySelectorAll('.btn')
    const storeItems = document.querySelectorAll('.store-item')

    
    buttons.forEach((button) => {
        button.addEventListener('click',(e)=>{
            e.preventDefault()
            //console.log(e) : return the object event, format {name:properties,..}
            //console.log(e.target): return the target of the event, i.e the DOM element
            //console.log(element.dataset): to access the custom data attribute: data-*
            // e.g <element data-user = "hello">
            // element.dataset.user returns "helo"
            const filter = e.target.dataset.filter

            storeItems.forEach((i) => {

                if (filter === 'all'){
                    i.style.display = 'block'
                } else{
                    if(i.dataset.item == filter){
                        i.style.display = 'block'
                    } else{
                        i.style.display = 'none'
                    }
                }
            })
        })
    })

})();


//function for search box

(function(){

    const searchBox = document.querySelector('#search-item')
    const storeItems = document.querySelectorAll('.store-item')

    searchBox.addEventListener('keyup', (e) => {

        const searchFilter = e.target.value.toLowerCase().trim()
        //display only items that contain filter input

        storeItems.forEach((item) => {
            if (item.textContent.includes(searchFilter)){
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })
    })

})();