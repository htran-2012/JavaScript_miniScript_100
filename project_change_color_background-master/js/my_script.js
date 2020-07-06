let docBody = document.querySelector('body')
let clickBtn = document.querySelector('.btn')

const color = ['red', 'green', 'yellow']

docBody.style.backgroundColor = 'aliceblue'

clickBtn.addEventListener('click', () =>{
    let i = Math.floor(Math.random() * color.length)
    docBody.style.backgroundColor = color[i]
})