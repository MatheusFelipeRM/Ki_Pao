function add_no_carrinho(produtos, preco_mutiplicado, quantidade_recebido){
    var tabela = document.getElementById("tabela")
    nova_linha= "<tr><td>"+produtos["serial"]+"</td> <td>"+produtos["nome"]+"</td> <td>"+produtos["preco"]+" R$"+"</td> <td>"+quantidade_recebido+"</td> <td>"+preco_mutiplicado+" R$"+"</td><td><button onclick='remove_produto()'>Remover</button></td></tr>"
    tabela.innerHTML += nova_linha;
}

var preco_total = 0;

function  receber_sereal(){
var serial_recebido = document.getElementById("caixa_de_texto").value
var quantidade_recebido = document.getElementById("quantidade").value

    for(var i = 0; i < produtos.length; i++){
        var auxiliar = produtos[i]

        if(auxiliar["serial"]==serial_recebido){
            var tabela = document.getElementById("tabela")
            var preco_mutiplicado = auxiliar["preco"]*quantidade_recebido
            add_no_carrinho(auxiliar, preco_mutiplicado, quantidade_recebido);
            preco_total = preco_total + preco_mutiplicado;
            document.getElementById("preco_final").innerHTML = preco_total

            return
            
        }  
    }
    alert("Não encontrou o produto")
}