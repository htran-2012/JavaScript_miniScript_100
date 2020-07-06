(function(){
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')
    let allButtons = document.querySelectorAll('.btn')
    let customerList =[]


    class Customer {
        constructor(img, name, text){
            this.img = img
            this.name = name
            this.text = text
        }
    }

    function createCustomerList(img, name, text){
        let imageLink = `./img/customer-${img}.jpg`
        let customer = new Customer(imageLink, name, text)
        customerList.push(customer)
    }
    createCustomerList(0, 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')
    createCustomerList(1, 'Sandy', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock')
    createCustomerList(2, 'Amy', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.')
    createCustomerList(3, 'Tyrell', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.')
    createCustomerList(4, 'Wanda', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')
    
    //console.log(customerList)

    allButtons.forEach((button) =>{
        let i = Math.floor(Math.random()*customerList.length)
        button.addEventListener('click', (e)=>{
            //console.log(e.target.parentElement.classList)
            if(button.classList.contains('prevBtn')){
                i--
                if(i<0){
                    i = customerList.length -1
                }
            }
            else if(button.classList.contains('nextBtn')){
                i++
                if(i > customerList.length -1){
                    i = 0
                }
            }
            // console.log(i)
            // console.log(customerImage)
            // console.log(customerList[i].img)
            // console.log(customerName.textContent)
            // console.log(customerList[i].name)
            // console.log(customerText)
            // console.log(customerList[i].text)
            
            customerImage.setAttribute('src', customerList[i].img)
            customerName.textContent = (customerList[i].name)
            customerText.textContent = (customerList[i].text)
        })


    })

})()