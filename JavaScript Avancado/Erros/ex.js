// try {    
//     const name = 'Celso Henrique'   
//     const myError = new Error('Custom message') 

//     throw myError;// coloca pra testar o erro. Ele força o erro
// } catch (err) {
//     console.log('Error:',err)
// } finally {
//     console.log('keep going...')
// }


// criando mensagens de erros customizadas
class CustomError extends Error {
    constructor({ message, data}) {
        super(message);
        this.data = data;
    }
}
try {    
    const name = 'Celso Henrique'   
    const myError = new CustomError({
        message: 'Custom message on custom error',
        data: {
            type: "Server Error"
        }
    }); 
    throw myError;
}   catch (err) {
    if (err.data.type === 'Server error') {        
        } else {
            
        }
    
    console.log(err)
    console.log(err.data)
}
   
finally {
    console.log('keep going...')
}
