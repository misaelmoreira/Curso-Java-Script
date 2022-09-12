//Funcao Simples com 2 parameetros

// function sum(a,b) {
//     return a + b 
// }

// console.log(sum(3,3))

// jeito antigo com +2 parametros

// function sum(a,b) {
//     var value = 0;

//     for (var i = 0; i < arguments.length; i++) {
//         value += arguments[i];
//     } 
//     return value ; 
// }

// console.log(sum(3,3,3))

// console.log(args) retorna um array 
// console.log(arguments) retorna um objeto

//rest operator pega todos os valores de arguumentos => rest

// function sum (...args) {
//     return args.reduce((acc, value) =>  acc + value , 0)      
// }

// console.log(sum(5,5,5,2,3))


// const sum = (a,b, ...rest) => { //pega o restante dos parametros.
//     console.log(a,b, rest);
// }

// console.log(sum(5,5,5,2,3))


// // antigamente sem o spread operator 
// const multiply = (...args) => args.reduce((acc,value) => acc * value, 1 )

// const sum = (...rest) => { 

//     return multiply.apply(undefined, rest)    
// };

// console.log(sum(5,5,5,2,3))



// // com spread operator
// const multiply = (...args) => args.reduce((acc,value) => acc * value, 1 )

// const sum = (...rest) => { 

//     return multiply(...rest)    
// };

// console.log(sum(5,5,5,2,3))


// // strings, arrays, literal objects e objetos iteraveis

// const str = "Digital Innovation One"

// function LogArgs(...args) {
//     console.log(args);
// }

// LogArgs(...str)



// const str = "Digital Innovation One"
const arr = [1,2,3,4]

function LogArgs(...args) {
    console.log(args);
}

// const arr2 = arr.concat([5,6,7])

//outra forma

const arr2 = [...arr,5,6,7]

const arrClone = [...arr]

// //LogArgs(arr2)

// const obj = {
//     test: 123
// };

// const obj2 = {
//     ...obj,
//     torta: "maça"
// }

// console.log(obj2)


// // shadown clone para nao alterar a propriedade do outro objeto.
// const obj = {
//     test: 123,
//     subObject: {
//         test: 123
//     }
// }

// const obj2 = {...obj, subObject: { ...obj.subObject}};

// obj2.subObject.test = 456;
// obj2.test = 456;

// console.log(obj)