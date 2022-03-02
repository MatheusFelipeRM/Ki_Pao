function validar_senha(){
   var matricula = document.getElementById("matricula").value
   var senha = document.getElementById("senha").value
    for(var i = 0; i < funcionarios.length; i++){
        //fun_aux recebe tudo do primeiro funcionario e depois do segundo ... (matricula senha nome)
        fun_aux = funcionarios[i]
        if(fun_aux["matricula"]==matricula){//se fun_aux[i] na variavel for igual a matricula
            if(fun_aux["senha"]== senha){
                //redirecionar
                window.location.href="../HTML/menu.html"
                return
            }else{
                alert("Erro a senha")
                return
            }
        }
    }
    alert("usuario não encontrado")
    return
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

