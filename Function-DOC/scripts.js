// O JSDoc é um padrão para incorporar documentação no código-fonte e partir desses comentários

/**
 * 
 * @param {Number} num number to check
 * @returns 
 */

/**
 * 
 * @param {String} email user email
 * @param {String} password more than 8 characters to be approved
 * @returns {Number} User id
 */


function sigIn(email, password){
    return 7
}




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


