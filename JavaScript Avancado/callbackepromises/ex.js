// maneira antiga callbacks

// function doSomeThing (callback) {
//     setTimeout (function () {
//         callback ('first data');
//     }, 1000)
// }

// function doOtherThing (callback) {
//     setTimeout (function () {
//         callback ('Second data');
//     }, 1000)
// }

// callback hell por causa do tamnho da função

// function doAll() {
//     try {
//         doSomeThing(function(data) {
//             var processedData = data.split('');

//             try {
//                 doOtherThing(function(data2) {
//                     var processedData2 = data2.split('');

//                     try {
//                         setTimeout(function (){
//                             console.log(processedData, processedData2)
//                         }, 1000);
//                     } catch (err) {
//                         //handle errror
//                     }                       
//                 })
//             } catch (err) {
//                 //handle error
//             }             
//         })
//     } catch(err){
//         //handle errror
//     }    
// }

// doAll()


// maneira nova usando promisses

const doSomeThingPromise = () => 
    new Promise ( (resolve,reject) => {           
        setTimeout(function () {
            resolve('first data');
        }, 2000);
    });

const doOtherThingPromise = () => 
    new Promise ( (resolve,reject) => {            
        setTimeout(function () {
            resolve('Second Data');
        }, 1000);
    });


// promises trabalhando em paralelo
// Promise.all([doSomeThingPromise(), doOtherThingPromise()]).then((data)=> {
//     console.log(data[0].split(''));
//     console.log(data[1].split(''));
// }).catch  (err => {
//     console.log(err)
// })


// a promisse que resolver primeiro e executada

Promise.race([doSomeThingPromise(), doOtherThingPromise()]).then((data)=> {
        console.log(data.split(''));
        
    }).catch  (err => {
        console.log(err)
    })



// doSomeThingPromise()
//     .then(data => { 
//         console.log(data.split('')); 
//         return doOtherThingPromise();
//     })
//     .then(data2 => console.log(data2.split('')))
//     .catch(error => console.log('ops',error))