// Operator condicional ternaário 
// let age = 18

// if (age < 18){
//     alert('Maior de idade')
// }

// else if (age = 18){
//     alert("Igual de idade")
// }

// else{
//     alert("Menor de idade")
// }


// Switch
let now = new Date()
let dayweek = now.getDay()
dayweek = -1



switch(dayweek){
    case 0:
        alert("Today is Sunday!")
        break
    
    case 1:
        alert("Today is Monday!")
        break
    case 2:
        alert("Today is Tuesday!")
        break
    case 3:
        alert("Today is Wedsnay!")
        break
    case 4:
        alert("Today is Thursday!")
        break
    case 5:
        alert("Today is Friday!")
        break
    case 6:
        alert("Today is Saturday!")
        break
    default:
        alert("Invalid Day")
}
