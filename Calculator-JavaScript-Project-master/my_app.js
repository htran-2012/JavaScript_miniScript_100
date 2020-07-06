(function(){
    //using eval to evaluate function.
    let screen = document.querySelector('.screen');
    let numberButtons = document.querySelectorAll('.btn-grey');
    let operatorButtons = document.querySelectorAll('.btn-yellow')
    let clearButton = document.querySelector('.btn-clear');
    let equalButton = document.querySelector('.btn-equal');

    numberButtons.forEach((btn) =>{
        
        btn.addEventListener('click', (e)=>{
            let numVal = (e.target.dataset.num)
            screen.value +=numVal
        })
    })

    operatorButtons.forEach((btn) =>{
        
        btn.addEventListener('click', (e)=>{
            let operatorVal = (e.target.dataset.num)
            screen.value +=operatorVal
        })
    })

    equalButton.addEventListener('click', (e) =>{
        if(screen.value === ''){
            console.log('please enter a valid operation')
        }
        else{
            let answer = eval(screen.value)
            screen.value = answer
        }
    })

    clearButton.addEventListener('click', (e)=>{
        screen.value = ''
    })

})()