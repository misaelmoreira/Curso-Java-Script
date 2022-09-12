// //symbols

// const uniqueId = Symbol('hello')

// const obj = {
//     [uniqueId]: 'Hello'
// }

// console.log(obj)

// const arr = [1,2,3,4]

// const it = arr[Symbol.iterator]();

// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// const arr = [1,2,3,4]

Symbol.iterator
Symbol.split
Symbol.toStringTag

// const it = arr[Symbol.iterator]();

// while (true) {
//     let {value,done} = it.next()

//     console.log(value)

//     if (done){
//         break;
//     }
// }

//com ecma6 faz com o for of

// const arr = [1,2,3,4]
// const str = 'Digital Innovation One'

// for (let value of str) {
//     console.log(value)
// }


/* const arr = [1,2,3,4]
const str = 'Digital Innovation One'


const obj = {
    values: [1,2,3,4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.values[i-1],
                    done: i > this.values.length
                };
            }
        };
    }
};

const it = obj[Symbol.iterator]()

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

// depois disso pode fazer umna iteração sobre ele

for (let value of obj) {
        console.log(value)
     } */

// // agora pode consumir um array 

// const arr2 = [...obj]

// console.log(arr2)


// generations


// function* hello () {

//     console.log('hello');
//     yield 1;

//     console.log('from');
//     yield 2;

//     console.log('function');
//     yield 3;
// }

// const it = hello();

// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// function* naturalNumbers() {
//     let number = 0;
//     while (true) {
//         yield number;
//         number++;
//     }
// }

// const it = naturalNumbers();

// console.log(it.next())
// console.log(it.next())
// console.log(it.next())



// construindo interface para objetos

// const arr = [1,2,3,4]
// const str = 'Digital Innovation One'

// const obj = {
//     values: [1,2,3,4],
//     *[Symbol.iterator]() {
//         for (var i =0; i<this.values.length; i++){
//             yield this.values[i]
//         }
//     }
// }; 

// for ( let value of obj) {
//     console.log(value)
// }


