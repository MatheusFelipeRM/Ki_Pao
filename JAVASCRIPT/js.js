//[] array
//var arr = [100, 200, 300, 400];

//alert(arr[0])
//alert(arr.length)


//{} objetos
//chaves e valore
//nome é a categoria
//Matheus é o valor
//Aqui não assecamos via indece e sim via chave

//var pessoa = {nome: "Matheus", idade: 17}
//var pessoa2 = {nome: "Ketlyn", idade: 13}
//var pessoa3 = {nome: "Fatima", idade: 40}
//var pessoas = [pessoa, pessoa2, pessoa3];

//function teste(){
    
//}

//alert(obj.nome)
//alert(obj.idade)


/*var car = ['bmw', 'ford', 'volvo', 'honda', 'toyota', 'chevolet']


console.log(car)

car.splice(3, car.length)

console.log(car)
*/
function remover(){
    var serial_recebido = document.getElementById('caixa_de_texto').value
    for(var i = 0; i < produtos.length; i++){ 
        var auxiliar = produtos[i];//produto[1]
        //alert(auxiliar["nome"])
        if(auxiliar["serial"] == serial_recebido){
            auxiliar.splice(auxiliar[i])
            alert(auxiliar["nome"])
            
        }
    }

    

        
}
