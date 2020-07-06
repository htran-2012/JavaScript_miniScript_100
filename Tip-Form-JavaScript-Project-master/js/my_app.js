(function(){
    const services = [{
        value: 1,
        title: "great - 20%"
      },{
        value: 2,
        title: "good - 10%"
      },{
        value: 3,
        title: "bad - 2%"
      }]

    const inputBill = document.querySelector('#input-bill')
    const inputUsers = document.querySelector('#input-users')
    const inputService = document.querySelector('#input-service')
    const submitButton = document.querySelector('[type = "submit"]')
    const tipForm = document.querySelector('#tip-form')
    const feedback = document.querySelector('.feedback')


    // append service option to <select> tag
    services.forEach((service, i) =>{
        let option = document.createElement('option')
        option.setAttribute('value', services[i].value)
        option.textContent = services[i].title
        inputService.append(option)
    })

    tipForm.addEventListener('submit', (e) =>{
        e.preventDefault();
        feedback.innerHTML = ''
        let isFeedback = true

        if(inputBill.value == '' || inputBill.value <=0){
            feedback.classList.add('showItem', 'alert-danger')
            //use innerHTML instead of textContent to append the alert message
            feedback.innerHTML  += '<p>Invalid bill amount</p>'
            isFeedback = false
        }
        if(inputUsers.value == '' || inputUsers.value <=0){
            feedback.classList.add('showItem', 'alert-danger')
            feedback.innerHTML  += '<p>Number Of Users Must Be Greater Than Zero</p>'
            isFeedback = false
        }
        if(inputService.value == '0'){
            feedback.classList.add('showItem', 'alert-danger')
            feedback.innerHTML += '<p>You Must Select A Service</p>'
            isFeedback = false
        }

        if(!isFeedback){
            setTimeout(()=>{
                feedback.classList.remove('showItem', 'alert-danger')
            }, 3000)
        }
 
        if(isFeedback){
            let resultPanel = document.querySelector('.results')
            let tipAmount = document.querySelector('#tip-amount')
            let totalAmount = document.querySelector('#total-amount')
            let personAmount = document.querySelector('#person-amount')
            let loader = document.querySelector('.loader')
            loader.classList.add('showItem')

            //using setTimeout to remove showItem on loader
            // and to add showItem on resultPanel
            // time delay is 3secs
            setTimeout(() =>{
                loader.classList.remove('showItem')
                resultPanel.classList.add('showItem')
            },3000)

            if(inputService.value == 1) {
                tipAmount.textContent= parseInt(inputBill.value)*0.2
                totalAmount.textContent = parseInt(inputBill.value)*1.2
                personAmount.textContent = parseInt(inputBill.value)*1.2/ parseInt(inputUsers.value)
            }
            else if(inputService.value == 2) {
                tipAmount.textContent= parseInt(inputBill.value)*0.1
                totalAmount.textContent = parseInt(inputBill.value)*1.1
                personAmount.textContent = parseInt(inputBill.value)*1.1/ parseInt(inputUsers.value)
            }
            else if(inputService.value == 3) {
                tipAmount.textContent= parseInt(inputBill.value)*0.02
                totalAmount.textContent = parseInt(inputBill.value)*1.02
                personAmount.textContent = parseInt(inputBill.value)*1.02/ parseInt(inputUsers.value)
            }

            //clear resultPanel and othervalue after 7 sec
            // note that this action will start at the same time with 
            // the above setTimeout
            setTimeout(() =>{
                resultPanel.classList.remove('showItem')
                inputBill.value = ''
                inputUsers.value = ''
                inputService.value = 0
            },7000)
        }
    })

})();