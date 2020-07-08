// show cart

(function(){
    //target cart button
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartInfo.addEventListener('click', function(){
        cart.classList.toggle('show-cart');
    })


})();



const cart = document.querySelector('#cart')
const allItems = document.querySelectorAll('.card')
const itemCountTotalElement = document.querySelector('#item-count')
const itemPriceTotalElement = document.querySelector('.item-total')
const cartTotalElement = document.querySelector('#cart-total')
const clearBtn = document.querySelector('#clear-cart')
ITEMLIST = []

// for each item in the 'Our store' section 
// add item in the ITEM LIST 
// add event listener to the cart icon 
// to append item onto the cart menu
allItems.forEach((item, index)=>{
    let itemimgsrc = (item.querySelector('.store-img').getAttribute('src'))
    let cartimgsrc = "img-cart/" + itemimgsrc.split('/')[1]
    let itemName = item.querySelector('#store-item-name').textContent
    let itemPrice = item.querySelector('#store-item-price').textContent

    addItemToLIST(itemName, cartimgsrc, itemPrice, index)

    let cartIcon = item.querySelector('.store-item-icon')
    cartIcon.addEventListener('click', (e) =>{
        alert('You added an item to cart')
        addItemToCart(itemName,  itemPrice, cartimgsrc, index)
        // itemCountTotalElement.textContent = parseInt(itemCountTotalElement.textContent)+1
        // itemPriceTotalElement.textContent = parseInt(itemPriceTotalElement.textContent) + parseInt(itemPrice)
        // cartTotalElement.textContent = itemPriceTotalElement.textContent
    })
})

function addItemToLIST(itemName, cartimgsrc, itemPrice, index){
    ITEMLIST.push({
        name: itemName,
        price: itemPrice,
        image: cartimgsrc,
        num: index
    })
    //console.log(ITEMLIST)
}

function addItemToCart(itemName,  itemPrice, cartimgsrc, index){
    const text = 
    `
    <div class="cart-item d-flex justify-content-between text-capitalize my-3" num=${index}>
        <img src="${cartimgsrc}" class="img-fluid rounded-circle" id="item-img" alt="">
        <div class="item-text">
            <p id="cart-item-title" class="font-weight-bold mb-0">${itemName}</p>
            <span>$</span>
            <span id="cart-item-price" class="cart-item-price" class="mb-0">${itemPrice}</span>
        </div>
        <a href="#" id='cart-item-remove' class="cart-item-remove">
            <i class="fas fa-trash"></i>
        </a>
    </div>
    `
    //console.log(text)
    pos = 'afterbegin'
    cart.insertAdjacentHTML(pos, text)
    //console.log(cart)
    itemCountTotalElement.textContent = parseInt(itemCountTotalElement.textContent)+1
    itemPriceTotalElement.textContent = parseInt(itemPriceTotalElement.textContent) + parseInt(itemPrice)
    cartTotalElement.textContent = itemPriceTotalElement.textContent
}


const allCartItems = document.querySelectorAll('.cart-item')

allCartItems.forEach((cartItem)=>{
    //console.log(cartItem)
    let itemPrice = cartItem.querySelector(".cart-item-price").textContent
    const trashBtn = cartItem.querySelector('#cart-item-remove')


    trashBtn.addEventListener('click', (e)=>{
        let itemToDelete = (e.target.parentElement.parentElement)

        cart.removeChild(itemToDelete)

        itemCountTotalElement.textContent = parseInt(itemCountTotalElement.textContent)-1
        itemPriceTotalElement.textContent = parseInt(itemPriceTotalElement.textContent) - parseInt(itemPrice)
        cartTotalElement.textContent = itemPriceTotalElement.textContent
    })

})