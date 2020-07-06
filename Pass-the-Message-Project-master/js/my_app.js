// (function(){

// })()
// ==>IIFE

(function(){
    const form = document.querySelector('#message-form')
    form.addEventListener('submit', (e) => {
        // prevent the form's default submission action
        e.preventDefault()

        const inputElement = document.querySelector('#message')
        let outputElement = document.querySelector('.message-content')
        const feedback = document.querySelector('.feedback')

        if (inputElement.value !== '' ){
            outputElement.textContent = inputElement.value
        }
        else{
            //setTimeout syntax : (function, time-to-out)
            // add 'show' to the class list then remove the class after 2 secs
            feedback.classList.add('show')
            setTimeout(function(){
                feedback.classList.remove('show')
            }
                , 2000)
        }
    })

})()
