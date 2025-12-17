const {Produto}=require('./produto')
class ProdutoAlimento extends Produto{
    constructor (nome,preco,categoria,descricao,validade){
        //só tá assim pq funciona
        super (nome,preco,categoria,descricao)
        this.validade=validade
    }
    desconto(){
      let descontoap=0
        //descontoaplicado
      let validadefixa=14122025
      //sem barrinha pra nao ferrar minha vida :D
      let mesquefalta=validadefixa-this.validade    

        //quanto menor a diferença maior o descono. como misera vou fzr isso?
        
        if(mesquefalta<=10000){
            //da mais ou menos 1 mes isso ae
            descontoap=0.20 //2o%
        }
        else if (mesquefalta<=30000){
            //3 mes 
            descontoap=0.1//->10%
        }
        else if (mesquefalta<=35000){
            descontoap=0.05//-> 5%
        }
        else {
            descontoap=0
        }
     function desconto(){
        let desconto = this.preco * descontoap
        return desconto
     }
    }
}
module.exports={ProdutoAlimento}