const {Produto}=require("./produto")
//desisti de comentar toda hora
class ProdutoRoupa extends Produto{
    constructor (nome,preco,categoria,descricao,tamanho,material){
    super(nome,preco,categoria,descricao)
     this.tamanho=tamanho
     this.material=material
    }
    desconto(){
        if(this.material==='algodao'){
           let a= this.preco * 0.1
          return a
        }
        //algodao geralmente é mais caro em massayo
        else {
            let b = this.preco * 0.2
            return b
        }
    }   
}   
module.exports={ProdutoRoupa}