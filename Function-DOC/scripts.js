alert(impPar(20))

function impPar(num){
    try {
        if (num % 2 == 0){
            calc()
            return 'Your number is par!'}

        else if(isNaN(num)){
            throw new Error('Insert a integer number! Is not a number!')}

        else{
            calc()
            return 'Your number is impar!'
            }

        function calc(){
            alert('Calculating...')
        }

} catch(error){
        alert(error)
    }  
}


let userNum = prompt('Insert a number: ')

alert(impPar(userNum))