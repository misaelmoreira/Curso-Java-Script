const assert  = require('assert')
const Math = require('../src/math.js') 
const expect = require('chai').expect;
const sinon = require('sinon')

// describe( 'Math class', function () {    
//     it( 'Sum Two numbers', function() {
//         const math = new Math()         
//         assert.equal(math.sum(5,5), 10) // descreve o comportamento e se tiver erro e disparado. 
//     })
// })


// describe( 'Math class', function () {    
//     it( 'Sum Two numbers', function() {
//         const math = new Math()         
//         math.sum(5, 5, (value) => {
//             assert.equal(value,15) 
//         })                 
//     })
// })


//validação do codigo assincrono usando o mocha com done

// describe( 'Math class', function () {    
//     it( 'Sum Two numbers', function(done) {
//         const math = new Math()        
//         this.timeout(3000)        
//         math.sum(5, 5, (value) => {
//             assert.equal(value,10)
//             done() 
//         })                 
//     })
// })


// // com arrow functions this referencia ao describe e o teste nao esta executando lá por isso do erro
// describe( 'Math class', function () {    
//     it( 'Sum Two numbers', (done) => {
//         const math = new Math()        
//         this.timeout(3000) // this        
//         math.sum(5, 5, (value) => {
//             assert.equal(value,10)
//             done() 
//         })                 
//     })
// })


// // mocha permite descrever comportamentos sem usa-los e ele alerta os pendentes.
// describe( 'Math class', function () {    
//     it( 'Sum Two numbers', function(done) {
//         const math = new Math()        
//         this.timeout(3000)        
//         math.sum(5, 5, (value) => {
//             assert.equal(value,10)
//             done() 
//         });                 
//     })
//     it ('Multiply two numbers');
// })


// // capacidade do mocha executar apenas um teste usando o metodo only.
// describe( 'Math class', function () {    
//     it( 'Sum Two numbers', function(done) {
//         const math = new Math()        
//         this.timeout(3000)        
//         math.sum(5, 5, (value) => {
//             assert.equal(value,10)
//             done() 
//         });                 
//     });
    // it.only('Multiply two numbers', function (){
    //     const math = new Math();
    //     assert.equal(math.multiply(5,5),25)
    // });

    // //pra pular o teste skip
    // it.skip('Multiply two numbers', function (){
    //     const math = new Math();
    //     assert.equal(math.multiply(5,5),25)
    // });

//     it('Multiply two numbers', function (){
//         const math = new Math();
//         assert.equal(math.multiply(5,5),25)
//     });
// })

//hooks formas de usar o codigo evitando repetição. ele inicia as variaveis com atributos antes de entrar nas funcoes it

// describe( 'Math class', function () {
//     //hooks
//     beforeEach(function() {
//         value = 0;
//     })
    
//     it( 'Sum Two numbers', function(done) {
//         const math = new Math()               
//         this.timeout(3000)
//         value = 5         
//         math.sum(value, 5, (value) => {
//             assert.equal(value,10)
//             done() 
//         });                 
//     });

//     it('Multiply two numbers', function (){
//         const math = new Math();
//         assert.equal(math.multiply(value,5),0)
//     });
// })

// utilizando chai

// describe( 'Math class', function () {
//     //hooks
//     beforeEach(function() {
//         value = 0;
//     })
    
//     it( 'Sum Two numbers', function(done) {
//         const math = new Math()               
//         this.timeout(3000)
//         value = 5         
//         math.sum(value, 5, (value) => {
//             expect(value).to.equal(10)
//             done() 
//         });                 
//     });

//     it('Multiply two numbers', function (){
//         const math = new Math();        
//         expect(math.multiply(value, 5)).to.equal(0)
//     });
// })


// // testando objs
// describe( 'Math class', function () {
//     //hooks
//     beforeEach(function() {
//         value = 0;
//     })
    
//     it( 'Sum Two numbers', function(done) {
//         const math = new Math()               
//         this.timeout(3000)
//         value = 5         
//         math.sum(value, 5, (value) => {
//             expect(value).to.equal(10)
//             done() 
//         });                 
//     });

//     it('Multiply two numbers', function (){
//         const math = new Math();
//         const obj = {
//             name: 'Celso Henrique'
//         }
//         expect(obj).to.have.property('name').equal('Celso Henrique')
//     });
// })


// //comparando 2 objetos
// describe( 'Math class', function () {
//     //hooks
//     beforeEach(function() {
//         value = 0;
//     })
    
//     it( 'Sum Two numbers', function(done) {
//         const math = new Math()               
//         this.timeout(3000)
//         value = 5         
//         math.sum(value, 5, (value) => {
//             expect(value).to.equal(10)
//             done() 
//         });                 
//     });

//     it('Multiply two numbers', function (){
//         const math = new Math();
//         const obj = {
//             name: 'Celso Henrique'
//         }
//         const obj2 = {
//             name: 'Celso Henrique'
//         }
//         expect(obj).to.deep.equal(obj2)
//     });
// })


//Usando sino. Utilizada pra mocar funcoes,api e metodos
describe( 'Math class', function () {
    //hooks
    beforeEach(function() {
        value = 0;
    })
    
    it( 'Sum Two numbers', function(done) {
        const math = new Math()               
        this.timeout(3000)
        value = 5         
        math.sum(value, 5, (value) => {
            expect(value).to.equal(10)
            done() 
        });                 
    });

    it('Multiply two numbers', function (){
        const math = new Math();
        const obj = {
            name: 'Celso Henrique'
        }
        const obj2 = {
            name: 'Celso Henrique'
        }
        expect(obj).to.deep.equal(obj2)
    });

    it.only('call req with sum and index values', function() {
        const req = {}
        const res = {
            //load: sinon.spy()  //usando o spy
            load: function load() {    
                console.log('Called')            
            } 
        }
        //sinon.spy(res, 'load') //add spy em função ja existente
        sinon.stub(res,'load').returns('xpto') // posso substituir o metodo spy pelo stub
        const math = new Math()
        math.printSum(req,res,5,5);
        //res.restore() //
        // expect(res.load.calledOnce).to.be.true; //verifica se ela foi invocada da maneira correta com o spy.
        // expect(res.load.args[0][0]).to.equal('index');  // posso verificar se o meu primeiro argumento enviado pra funcao e index.
        expect(res.load.args[0][0]).to.equal('index');  // posso tambem verificar se o segundo argumento e a soma dos valores.
    })
})