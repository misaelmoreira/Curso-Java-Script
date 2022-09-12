// // fetch

// fetch('http://localhost:8081/get')
//     .then(responseStream => {
//         console.log(responseStream)
//         // no codigo abaixo eu garanto que funcione so com o request 200
//         if (responseStream.status === 200) {
//             return responseStream.json()
//         } else {
//             throw new Error('Request error')
//         }        
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log('Error:', err)
//     })

// a partir do ES7 Async/Await

const asyncTimer = () => new Promise((resolve,reject) => {
    setTimeout (() => {
        resolve(12345)
    }, 1000)
})

const simpleFunc = async () => {
    const data = await asyncTimer();
    console.log(data)
    const dataJSON = await fetch('/get').then( dado => dado.json())
    //console.log(dado)
    
    return dataJSON;
}

// // resolvendo as promisses em paralelo com await 
// const simpleFunc = async () => {
//     const data = await Promise.all([ 
//         asyncTimer(), 
//         fetch('/get').then( dado => dado.json()) 
//     ])   
//     return data;
// }

// simpleFunc().then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })


//----------------------------------------

// // Event Emitter exclusivo do node.js (Trabalhando com Eventos)


// const EventEmitter = require ('events')

// class Users extends EventEmitter {
//     userLogged (data) {
//         setTimeout(() => {
//             this.emit( 'User logged', data)
//         }, 2000)
        
//     }
// }

// const users =  new Users()

// users.on('User logged', data => {
//     console.log(data)
// });

// users.userLogged({ user: 'Celso Henrique'})
// users.userLogged({ user: 'Vicente'})

 
//EventTarget usado no navegador Trabalhando com Eventos 


