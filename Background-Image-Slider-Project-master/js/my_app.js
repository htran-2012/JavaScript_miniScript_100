(function(){
    //create a list of image name
    const pictures = [
        "contBcg-0",
        "contBcg-1",
        "contBcg-2",
        "contBcg-3",
        "contBcg-4"
      ];
    
    //create variable
    let i = Math.floor(Math.random() * pictures.length)
    const imageContainer = document.querySelector('.img-container')
    const allBtn = document.querySelectorAll('.btn')

    //for each button
    allBtn.forEach((button)=>{
        //add event listener
        button.addEventListener('click',()=>{
            //if button is left, decrement i
            //if i <0, jump to last element on pictures len
            if(button.classList.contains('btn-left')){
                i--
                if(i<0){
                    i = pictures.length-1
                }
            }
            //if button is right, increment i
            //if i >picture len, jump to first element on pictures
            else if(button.classList.contains('btn-right')){
                i++
                if(i>pictures.length-1){
                    i = 0
                }
            }

            // log i in inside click event soas click event to work
            // using i to access image in list
            let imageLink = `url(./img/${pictures[i]}.jpeg)` 
            //console.log(imageLink)
            imageContainer.style.backgroundImage = imageLink

        })
    })

})()