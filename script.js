let btnEl = document.getElementById('btn')
let containerEl = document.querySelector('.container')
btnEl.addEventListener('click', ()=>{
    if(btnEl.innerHTML === "Dark Mode"){
    containerEl.style.backgroundColor = 'black'
    btnEl.style.backgroundColor = 'black'
    btnEl.style.border = '2px solid black'
    containerEl.style.color = 'white'
    btnEl.style.color = 'white'
    btnEl.innerHTML = 'Light Mode'
    }else{
    containerEl.style.backgroundColor = 'white'
    btnEl.style.backgroundColor = 'white'
    containerEl.style.color = 'black'
    btnEl.style.border = '2px solid white'
    btnEl.style.color = 'black'
    btnEl.innerHTML = 'Dark Mode'
    }
})