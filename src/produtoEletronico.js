const { Produto } = require('./produto')
//claasse produtoEletronico
class produtoEletronico extends Produto {
    //construtor.
    constructor(nome, preco, categoria, descricao, voltagem, garantia) {
       //só vou deixar assim pq funcionou
        super(nome, preco, categoria, descricao)
        this.voltagem = voltagem
        this.garantia = garantia
    }

    //método pra aplicar desconto se o valor for alto, coloquei 60 pq nao tinha nenhum valor fixo
    desconto() {
        if (this.preco > 60) {
            return this.preco * 0.05
        }
        return 0
    }
}



//module nao é plural 
module.exports = { produtoEletronico }
