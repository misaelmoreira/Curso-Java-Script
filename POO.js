// ---------    Classes -------------------

const Cliente = function (_nome, _cpf, _rg) {
    
    this.nome = _nome;
    this.cpf = _cpf;
    this.rg = _rg;

    this.Mostrar = function() {
        console.log('Nome: ' + this.nome);
        console.log('CPF: ' + this.cpf);
        console.log('RG: ' + this.rg);
    }
}

// ---------    Classes -------------------

const Cliente2 = function (_campos) {   
    if(_campos != undefined) {
        this.nome = _campos.nome;
        this.cpf = _campos.cpf;
        this.rg = _campos.rg;
    } else {
        this.nome = "";
        this.cpf = "";
        this.rg = "";
    }
    this.Mostrar = function() {
        console.log('Nome: ' + this.nome);
        console.log('CPF: ' + this.cpf);
        console.log('RG: ' + this.rg);
    }
    this.GravarEmMemoria = function(){
        Cliente2.Base.push(this);
    }
}

Cliente2.Base = [];

Cliente2.todos = function(){
    for( i=0; i < Cliente2.Base.length; i++) {
        cliente = Cliente2.Base[i];
        console.log('-------------Gravado em Memoria ----------');
        console.log('Nome: ' + cliente.nome);
        console.log('Nome: ' + cliente.cpf);
        console.log('Nome: ' + cliente.rg);
        console.log('-----------------------');
    }

}


// ---------    Classes -------------------

var Fornecedor = function() {
    this.CNPJ = "";
    this.entregarProdutos = function() {
        console.log('O fornecedor entregou')
    }
    this.GravarEmMemoria = function(){
        Fornecedor.Base.push(this);
    }
}

Fornecedor.prototype = new Cliente2();

// metododos de classe ou metodo estatico
Fornecedor.Base = [];

//-------------------- Logica de Codigo ----------------

const rafa = new Fornecedor('rafael',123 ,456);
const misa = new Cliente('misael',456,123);
var c2 = new Cliente2({ nome: 'alo', rg: 123, cpf:'456'})

console.log(misa.Mostrar());
console.log('--------------');
console.log(c2.Mostrar());
c2.GravarEmMemoria();

console.log('--------------');
console.log(rafa.Mostrar());
console.log(rafa.entregarProdutos());

Cliente2.todos();


