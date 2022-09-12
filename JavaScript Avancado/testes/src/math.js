// class Math {
//     sum = function sum (a,b) {
//         return a + b
//     }
// }

// //refatorando o codigo
// class Math {
//     sum (a,b) {
//         return a + b
//     }
// }

// class Math {
//     sum (a,b, callback) {
//         setTimeout(() => {
//             callback(a + b) 
//         }, 2500)        
//     }
//     multiply(a,b) {
//         const result = a * b;
//         return result
//     }
// }

//refatorando

// class Math {
//     sum (a,b, callback) {
//         setTimeout(() => {
//             callback(a + b) 
//         }, 2500)        
//     }
//     multiply(a,b) {
//         return a * b;        
//     }
// }


// //complicando a class
// class Math {
//     sum (a,b, callback) {
//         setTimeout(() => {
//             callback(a + b) 
//         }, 2500)        
//     }
//     multiply(a,b) {
//         return a * b;        
//     }
//     printSum(req,res, a, b) {
//         res.load('index', a + b)
//     }
// }

// alterando para o stub
class Math {
    sum (a,b, callback) {
        setTimeout(() => {
            callback(a + b) 
        }, 2500)        
    }
    multiply(a,b) {
        return a * b;        
    }
    printSum(req,res, a, b) {
        console.log(res.load('index', a + b))
    }
}

module.exports = Math