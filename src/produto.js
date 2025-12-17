    //classe produto
    class Produto {
        constructor (nome,preco,categoria,descricao){
            this.nome=nome
            this.preco=preco
            this.categoria=categoria
            this.descricao=descricao
        }
        //metodo pra exibir as informaço~es
        info(){
            return `produto: ${this.nome} | preço: ${this.preco} | categoria: ${this.categoria} | descrição: ${this.descricao}`
        }
        //metodo pra calcular o desconto
        desconto(){
            return 0
            //no arquivo lá diz que tem qie retonar 0, qualqeur coisa tamo ai
        }
    }
    module.exports={Produto}