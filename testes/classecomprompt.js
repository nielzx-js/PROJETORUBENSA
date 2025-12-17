const prompt=require('prompt-sync')();
class alimento {
    constructor(nome,categoria,validade){
        this.nome=nome
        this.categoria=categoria
        this.validade=validade
    }
    info(){
        return `nome: ${this.nome} | categoria: ${this.categoria} | validade: ${this.validade}`
    }
}

let nome = prompt("nome: ")
let categoria= prompt("categoria: ")
let validade = prompt("validade: ")
let alimentoa = new alimento(
nome,
categoria,
validade
)

console.log(" TESTE 1: NOME")
console.log(" ")
console.log(alimentoa.nome)
console.log(" ")
console.log("TESTE 2: CATEGORIA")
console.log(" ")
console.log(alimentoa.categoria)
console.log(" ")
console.log("TESTE 3: VALIDADE")
console.log(" ")
console.log(alimentoa.validade)
console.log(" ")
console.log("TESTE 4: INFORMAÇÕES")
console.log(alimentoa.info())
//funciona