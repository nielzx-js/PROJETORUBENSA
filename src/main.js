    const dados = require('prompt-sync')();
    //coloquei dados pq lembra minha época de calouro, mas, quando é pra uso profissional só uso prompt
    const { ProdutoAlimento } = require("./ProdutoAlimento")
    const { ProdutoRoupa } = require("./produtoRoupa")
    const { produtoEletronico } = require("./produtoEletronico")
    const { Carrinho } = require("./carrinho")
    const nome_do_mercado = "Mercado do zézé"
    const carrinho = new Carrinho()
    let opcao = -1
    //uma opção que nao encerra o programa
    let rodando = true
    while (rodando) { 
    console.clear()
    console.log('=======================================')
    console.log(nome_do_mercado)
    console.log('=======================================')
    console.log("1 - Cadastrar alimento ")
    console.log("2 - Cadastrar ROupa")
    console.log("3 - Cadastrar Produto ELetronico")
    console.log("4 - ver carrinho")
    console.log("5 - ver total")
    console.log("6 - sair")
    
    opcao = parseInt(
            dados("escolha a opção: ")
        )

    if (opcao === 1) {
            let nome = dados("Nome do alimento: ")
            let preco = parseFloat(dados("preço do alimento: "))
            let categoria = "alimento"
            let descricao = dados("diga uma breve descricao: ")
            let validade = parseInt(dados("informe uma data do tipo: 14122025    "))

            let alimento = new ProdutoAlimento(
                nome,
                preco,
                categoria,
                descricao,
                validade
            )

            carrinho.add(alimento)
            // achei genial
            dados("digite enter para continuar")
        }

        else if (opcao === 2) {
            let nome = dados("Nome da roupa: ")
            let preco = parseFloat(dados("preço da roupa: "))
            let categoria = "roupa"
            let descricao = dados("diga uma breve descricao: ")
            let tamanho = dados("tamanho da roupa: ")
            let material = dados("material da roupa: ")

            let roupa = new ProdutoRoupa(
                nome,
                preco,
                categoria,
                descricao,
                tamanho,
                material
            )

            carrinho.add(roupa)
            // achei genial
            dados("digite enter para continuar")
        }

    else if (opcao === 3) {
        let nome = dados("Nome do Eletronico: ")
        let preco = parseFloat(dados("preço do Eletronico: "))
        let categoria = "eletronico"
        let descricao = dados("diga uma breve descricao: ")
        let voltagem = dados("voltagem do produto: ")
        let garantia = dados("garantia (em meses): ")
        let eletronico = new produtoEletronico(
                nome,
                preco,
                categoria,
                descricao,
                voltagem,
                garantia
            )

        carrinho.add(eletronico)
        // achei genial
        dados("digite enter para continuar")
        }

        else if (opcao === 4) {
            carrinho.listar()
            //tem que ter se nao trava
            dados("digite enter para continuar")
        }

        else if (opcao === 5) {
            let total = carrinho.total()
            
            console.log("total da compra: R$ " + total)
            dados("digite enter para continuar")
        }

        else if (opcao === 6) {
            console.log("saindo...")
            rodando = false
        }

        else { 
            console.log("opção invalida")
            dados("digite enter para continuar")
        }
    }
