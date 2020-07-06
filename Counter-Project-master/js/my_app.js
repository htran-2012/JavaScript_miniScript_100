// (function(){
//     const prevBtn = document.querySelector('.prevBtn')
//     const nextBtn = document.querySelector('.nextBtn')
//     let counterNum = document.querySelector('#counter')


//     prevBtn.addEventListener('click', ()=>{
//         let num = parseInt(counterNum.textContent)
//         num --
//         counterNum.textContent = num
//         if(num<0){
//             counterNum.style.color = 'red'
//         }
//         else if (num>0){
//             counterNum.style.color = 'green'
//         }
//     })


//     nextBtn.addEventListener('click', ()=>{
//         let num = parseInt(counterNum.textContent)
//         num ++
//         counterNum.textContent = num
//         if(num<0){
//             counterNum.style.color = 'red'
//         }
//         else if (num>0){
//             counterNum.style.color = 'green'
//         }
//     })

// })()

(function(){
    const allButtons = document.querySelectorAll('.btn')
    const counterElement = document.querySelector('#counter')
    
    allButtons.forEach((button)=>{
        
        button.addEventListener('click', ()=>{
            let counter = parseInt(counterElement.textContent)
            if(button.classList.contains('prevBtn')){
                counter--
                counterElement.textContent = counter
            }
            else if(button.classList.contains('nextBtn')){
                counter ++
                counterElement.textContent = counter
            }
            console.log(counter)    
            if(counter < 0){
                counterElement.style.color = 'red'
            }
            else if(counter > 0){
                counterElement.style.color = 'green'
            }

        })

    })

})();