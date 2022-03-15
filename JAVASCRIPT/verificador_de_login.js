function validar_senha(){
   var matricula = document.getElementById("matricula").value
   var senha = document.getElementById("senha").value
    for(i in funcionarios){
        if(funcionarios[i]["matricula"]==matricula){
            if(funcionarios[i]["senha"]==senha){
                window.location.href = "../HTML/menu.html"
                return
            }else{
                alert("Senha incorreta!")
                return
            }
        }
    }
    alert("Usuario não encontrado.")
}

function add_no_carrinho(produtos, preco_mutiplicado, quantidade_recebido){
    var tabela = document.getElementById("tabela")
    nova_linha= "<tr><td>"+produtos["serial"]+"</td> <td>"+produtos["nome"]+"</td> <td>"+produtos["preco"]+" R$"+"</td> <td>"+quantidade_recebido+"</td> <td>"+preco_mutiplicado+" R$"+"</td></tr>"
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

function remove_no_carrinho(produtos){
    var tabela = document.getElementById("tabela")
    nova_linha= "<tr><td>"+produtos['serial']+"</td> <td>"+produtos["nome"]+"</td> <td>"+produtos["preco"]+" R$"+"</td> <td>"+"removido"+"</td>"
    tabela.innerHTML += nova_linha;
}

function remover(){
    var serial_recebido = document.getElementById("caixa_de_texto").value
    var div = document.getElementById('center')

    for(var i = 0; i < produtos.length; i++){
        var auxiliar =   produtos[i]

        if(auxiliar["serial"]==serial_recebido){
           var resposta = Number(prompt('Digite 1 para sim e 2 para não'))
           remove_no_carrinho(auxiliar);
           if(resposta==1){
            auxiliar.splice(0, 1);
           }else if(resposta==2){
               alert("não excluido")
           }else{
               alert("Opção inválida!")
                return
           }
        }
    }
    alert("esse "+auxiliar['nome'])
}

