// show cart

(function(){
    //target cart button
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartInfo.addEventListener('click', function(){
        cart.classList.toggle('show-cart');
    })


})();

(function(){
    const cartBtn = document.querySelectorAll('.store-item-icon');

    cartBtn.forEach(function(btn){
        btn.addEventListener('click', function(event){
            //make sure event fires only if it has a parent of a certain class.
            if(event.target.parentElement.classList.contains('store-item-icon')){
                const item = {};

                let imgPath = event.target.parentElement.previousElementSibling.getAttribute('src');

                let cartimgPath = `img-cart/${imgPath.split('/')[1]}`
                //console.log(cartimgPath)
                item.img = cartimgPath

                let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent
                
                item.name = name

                let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent

                item.price = price.slice(1).trim()
                //console.log(item)

                //create a cartItem to append to cart
                const cartItem = document.createElement('div');
                cartItem.innerHTML = `<div class="cart-item d-flex justify-content-between text-capitalize my-3"><img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
                <div class="item-text"><p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p><span>$</span>
                <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span></div><a href="#" id='cart-item-remove' class="cart-item-remove"><i class="fas fa-trash"></i></a></div>`;
            
                const cart = document.getElementById('cart');
                const total = document.querySelector('.cart-total-container');

                //insert cartItem into cart, before total
                cart.insertBefore(cartItem, total);
                alert('item added to the cart');

                showTotals()

            }//end of if
        })//end of btn.addEventListener
    })//end cardBtn.forEach


    //calculate and showTotals
    function showTotals(){
        const total = [];
        const allitemPrice = document.querySelectorAll('.cart-item-price');
        console.log(allitemPrice)
        allitemPrice.forEach((itemPrice)=>{
            total.push(parseFloat(itemPrice.textContent));
        })

        const totalMoney = total.reduce(function(total, item){
            total += item;
            return total;
        },0);

        const finalMoney = totalMoney.toFixed(2);
        document.getElementById('cart-total').textContent = finalMoney;
        document.querySelector('.item-total').textContent = finalMoney;
        document.getElementById('item-count').textContent = total.length;

    }

})()