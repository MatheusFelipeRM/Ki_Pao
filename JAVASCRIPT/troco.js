function troco(){
        var buffer = "<div class='container-alert'><label>Valor:</label><input type='text' id='valorRecebidoValue'><p id='resposta'></p><button onclick='calcular()'>Calcular troco</button><button onclick='cancelAlert()'>cancelar</button></div>"
        document.getElementById("alert_troco").innerHTML = buffer

}
function calcular(){
    var valor = document.getElementById('valorRecebidoValue').value
    var resultado = valor - preco_total
    if(resultado<0){
        document.getElementById('resposta').innerHTML = "O cliente esta devendo: "+ (preco_total - valor)+' R$'
    }else if(resultado>0){
    document.getElementById('resposta').innerHTML = "O troco é de: "+ (valor - preco_total)+' R$'

    }
}
function cancelAlert(){
    document.getElementById('alert_troco').innerHTML = "";
}