// CALLBACK FUNCTION é uma função passada para outra função como um argumento 

function execute(taskName, callback){
    console.log(`Executing task: ${taskName}`)
    alert('Executing Task:' + taskName)

    callback()
}

function callback(){
    console.log('Task Done!')
    alert('Task Done!')
}

execute('Pasting file...', callback)

// Criandpo a função no próprio arquivo
execute("Copying file...", () =>{
    alert('Using arrow function as callback')
})