/* The modal container is at the end of the body,
including a container/holder/close-item-control
-Grab the lb container. Container has the css style display:none
so to show the image, have to change it with .show class

-grab the lb item. The item has a background:url(), and have to change it

-wire the storeImages with the lightbox container to show image

-wire the storeImages with apporpriate image to put into the lightbox item

-wire the lightbox button to close, show next, show previous img
*/


(function(){

    let storeItems = document.querySelectorAll('.store-item');
    // lightbox container
    let lightBox = document.querySelector('.lightbox-container');
    // lightbox item
    let lightBoxItem = document.querySelector('.lightbox-item');
    let images = document.querySelectorAll('.store-img');
    //create image Index
    let imageIndex = 0

    // add a click listener for each store items, display image on click
    storeItems.forEach((storeItem, index) =>{
        storeItem.addEventListener('click', (e) => {
            //change imageIndex into the index of the clicked image
            imageIndex = index
            //grab image link, by acessing event.target.src
            let image = e.target.src;
            // wrap the link inside the url() format, use it to change background 
            lightBoxItem.style.backgroundImage = `url(${image})`
            //change display: none into show by adding class 'show'
            lightBox.classList.add('show')
        })
        
    })
    //end of image modal

    //close button on modal
    let closeBtn = document.querySelector('.lightbox-close')
    closeBtn.addEventListener('click', ()=> {
        lightBox.classList.remove('show')
    })
    //end of close button modal

    //left and right button on modal
    let modalBtn = document.querySelectorAll('.lightbox-control')
    modalBtn.forEach((btn) =>{
        btn.addEventListener('click', (e) =>{

            if(btn.classList.contains('btnLeft')){
                imageIndex--
                if(imageIndex < 0) {
                    imageIndex = images.length -1
                }
            } else if(btn.classList.contains('btnRight')){
                imageIndex++
                if(imageIndex > images.length -1) {
                    imageIndex = 0
                }
            }
            let image = (images[imageIndex].src)
            lightBoxItem.style.backgroundImage = `url(${image})`

        })
    })
    //end of button modal


})();