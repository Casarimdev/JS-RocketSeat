// Visualizar o conteudo do document

console.log(document)

// Obter o titke da página
console.log(document.title)



function added(event){
    event.preventDefault()// Previne o comportamento padrão de submissão do formulário
    let button1 = document.getElementById("btn")
    button1.style.background = 'green'
    button1.innerText = 'Adicionado'
}

let guestsByClass = document.getElementsByClassName("guest")

console.log(guestsByClass.item(1))


let guest = document.querySelectorAll(".guest")
console.log(guest)

// for (let i = 0; i < guest.length; i ++){
//     guest[i].style.background = 'green'
// }