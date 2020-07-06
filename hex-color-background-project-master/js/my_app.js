const docBody = document.querySelector('body')
const clickBtn = document.querySelector('#btn')
const hexElement= document.querySelector('#hex-value')
const hex = [0,1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D', 'E', 'F']



clickBtn.addEventListener('click', ()=>{
    let hexValue = '#'
    for(let i = 0; i<6; i++){
        let idx = Math.floor(Math.random()* hex.length)
        hexValue += hex[idx] 
    }
    hexElement.textContent = hexValue;
    docBody.style.backgroundColor = hexValue

})

