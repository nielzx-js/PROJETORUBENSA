//precisa importar nao (esqueci de importar e funcionou)

class Catalogo {
    constructor(){
        this.produtos=[]
        //produto salvo no array
    }
    //adicionar produto ao carrinho 
adproduto(produto){
    this.produtos.push(produto)
    console.log("produto foi cadastrado")
}
listarProdutos(){
    if(this.produtos.length===0){
        console.log("tem nada cadastrado nao amigao")
        return

    }
    let i = 0
    while (i<this.produtos.length){
        console.log(i + "-" + this.produtos[i].info())
        i++
    }
    //1° listar com while é bem mais fácil do que com for
    //2° o padrão que escolhi foi: indice - informmacao

}
//buscar por nome
bpnome(nome){
    let achei = this.produtos.filter(p=>p.nome===nome)
    //https://www.youtube.com/shorts/l1GHImkBBJU <- aprendi aí oh
    if (achei.length===0){
        console.log("achei nao mano")
        return []
    }
    return achei
}
//buscar por categoria
bpcategoria(categoria){
    let achei=this.produtos.filter(p=>p.categoria===categoria)
    if (achei.length===0){
        console.log('achei nao mano')
        return []
    }
    return achei    
}
pegarProduto(indice){
    return this.produtos[indice]
}
}
module.exports={Catalogo}