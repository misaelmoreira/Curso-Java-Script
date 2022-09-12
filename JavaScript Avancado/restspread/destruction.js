//sem destruction assigment

// var arr = [ 'apple', 'banana', 'orange',['tomato']];

// var apple = arr[0];
// var banana = arr[1];
// var orange = arr[2];
// var tomato = arr[3][0];

var obj = {
    name: 'celso',
    props: {
        age: 26
    }
}

var age = obj.props.age;

console.log(age)

//com destruction assigment

// var [apple2, banana2, orange2, [tomato2]] = [ 
//     'apple', 
//     'banana', 
//     'orange',
//     ['tomato']
// ];

// console.log(tomato2)

var { name: name2 } = obj
var { props: { age } } = obj

console.log(age)