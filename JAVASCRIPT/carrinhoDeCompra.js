var preco_total = 0;
carrinho = []

function updateTableProduct() {
    document.getElementById("table-produto").innerHTML = ""
    for (i in produtos) {
        document.getElementById("table-produto").innerHTML += "<tr><td>" + produtos[i]['nome'] + "</td><td>" + produtos[i]['preco'] + "</td><td>" + produtos[i]['serial'] + "</td></tr>"
    }
}

function updateCarrinho(){
    document.getElementById("tabela").innerHTML = ""
    for(i in carrinho){
        var n = "<tr><td>" + carrinho[i]['nome'] + "</td> <td>" + carrinho[i]['serial'] + "</td> <td> R$" + carrinho[i]['preco'] + "</td> <td>" + carrinho[i]['qntd'] + "</td> <td>R$" + carrinho[i]['total'] + "</td><td><button onclick='remove_produto("+i+")'>Remover</button></td></tr>"
        document.getElementById("tabela").innerHTML += n
    }
}

function receber_sereal() {
    var serial_recebido = document.getElementById("caixa_de_texto").value
    var quantidade_recebido = document.getElementById("quantidade").value
    if(isNaN(parseInt(quantidade_recebido)) || parseInt(quantidade_recebido)<=0){
        alert("A quantidade mínima é um!")
        return
    }else{
        for (var i = 0; i < produtos.length; i++) {
            var auxiliar = produtos[i]
    
            if (auxiliar["serial"] == serial_recebido) {
                var tabela = document.getElementById("tabela")
                var preco_mutiplicado = auxiliar["preco"] * quantidade_recebido
                carrinho.push({nome: auxiliar["nome"], preco: auxiliar["preco"], serial: auxiliar["serial"], qntd: quantidade_recebido, total: preco_mutiplicado})
                updateCarrinho()
                preco_total += preco_mutiplicado;
                document.getElementById("preco_final").innerHTML = preco_total
    
                return
    
            }
        }
    }
    alert("Não encontrou o produto")
}

function remove_produto(id){
    var total = parseFloat(carrinho[i]["total"])
    preco_total -= total
    document.getElementById("preco_final").innerHTML = preco_total
    carrinho.splice(id, 1)
    updateCarrinho()
}


updateTableProduct()