 class Carrinho {
    constructor (){
        this.itens=[]
    }
    //adicionar produto
    add(produto){
        this.itens.push(produto)
        console.log("produto foi adicionado ao carrinho")
    }
    listar(){
        if(this.itens.length===0){
            console.log("o varrinho ta vazio")
            return 
        }
        let i = 0
        while (i<this.itens.length){
            console.log(
    i + " - " +
    this.itens[i].nome + " - " +
    "R$" + this.itens[i].preco +
    " | desconto aplicado: " +
    this.itens[i].desconto() +
    " | valor final: " +
    (this.itens[i].preco - this.itens[i].desconto())
)

            //mostra o item + os preço
            i++
        }
    }
    total (){
        let soma = 0
        let i =  0
        while (i<this.itens.length){
            soma += this.itens[i].preco
            i++
        }
        return soma
    }
 }

 module.exports={Carrinho}