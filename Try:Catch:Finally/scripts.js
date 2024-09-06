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


// Try / Catch / Finally

// try {
//     let int_num = prompt('Insert a num, i will return a double.')
    
//     if (isNaN(int_num)) {
//         throw new Error("Not a valid number");
//     }

//     let double_num = int_num * 2
//     alert(double_num)
// }
// catch(error){
//     alert(error)
// } 
// finally {
//     console.log('End')
// }


try{
    let name = prompt("What's your name?")

    if (Number(name)){
        throw new Error(`Insert text, not numbers! ${name} is not a valid name!`)
    }

    alert(`Hello, ${name.toUpperCase(name)}!`)
}

catch(error){
    alert(error)
}

finally{
    alert('Program executed')
}
