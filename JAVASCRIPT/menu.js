function updateTableUser(){
    for(i in funcionarios){
        document.getElementById("table-usuario").innerHTML += "<tr> <td>"+funcionarios[i]['nome']+"</td><td>"+funcionarios[i]['matricula']+"</td><td>"+funcionarios[i]['senha']+"</td><td>"+funcionarios[i]['idade']+"</td></tr>"
    }
}

function updateTableProduct(){
    for(i in produtos){
        document.getElementById("table-produto").innerHTML += "<tr><td>"+produtos[i]['nome']+"</td><td>"+produtos[i]['preco']+"</td><td>"+produtos[i]['serial']+"</td></tr>"

    }
}

updateTableUser()
updateTableProduct()