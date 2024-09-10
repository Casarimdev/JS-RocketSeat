let guest1 = document.querySelector('#guest-1')
console.log(guest1.innerHTML)



function clickLucas(event){
    event.preventDefault()
    guest1.innerHTML = 'Lucas'
}

