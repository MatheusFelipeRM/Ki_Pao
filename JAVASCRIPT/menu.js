function updateTableUser(){
    for(i in funcionarios){
        document.getElementById("table-usuario").innerHTML += "<tr> <td>"+funcionarios[i]['nome']+"</td><td>"+funcionarios[i]['matricula']+"</td><td>"+funcionarios[i]['senha']+"</td><td>"+funcionarios[i]['idade']+"</td></tr>"
    }
}

function updateTableProduct(){
    document.getElementById("table-produto").innerHTML = ""
    for(i in produtos){
        document.getElementById("table-produto").innerHTML += "<tr><td>"+produtos[i]['nome']+"</td><td>"+produtos[i]['preco']+"</td><td>"+produtos[i]['serial']+"</td><td><button onclick='alertEditProduct("+i+")'>Editar</button><button onclick='deleteProduct("+i+")'>Remover</button></td></tr>"
    }
}

function addProduct(){
    var nome = document.getElementById("addProductName").value
    var valor = document.getElementById("addProductValue").value
    var serial = document.getElementById("addProductSerial").value
    var buffer = {nome: nome, preco: parseFloat(valor), serial: serial}
    produtos.push(buffer)
    updateTableProduct()
    cancelAlert()
}

function deleteProduct(id){
    produtos.splice(id, 1)
    updateTableProduct()
}

function editProduct(id){
    var nome = document.getElementById("editProductName").value
    var valor = document.getElementById("editProductValue").value
    var serial = document.getElementById("editProductSerial").value

    produtos[id]["nome"] = nome
    produtos[id]["valor"] = valor
    produtos[id]["serial"] = serial
    updateTableProduct()
    cancelAlert()
}

function alertAddProduct(){
    var buffer = "<div class='container-alert'><div class='labels'><label>Nome:</label><input type='text' id='addProductName'><label>Valor:</label><input type='text' id='addProductValue'><label>Serial:</label><input type='text' id='addProductSerial'><div class='buttons-alert'><button onclick='cancelAlert()'>Cancelar</button><button onclick='addProduct()'>Salvar</button></div></div></div>"
    document.getElementById("alert").innerHTML = buffer
}

function alertEditProduct(id){
    var buffer = "<div class='container-alert'><div class='labels'><label>Nome:</label><input type='text' id='editProductName' value="+produtos[id]['nome']+"><label>Valor:</label><input type='text' id='editProductValue' value="+produtos[id]['preco']+"><label>Serial:</label><input type='text' id='editProductSerial' value="+produtos[id]['serial']+"><div class='buttons-alert'><button onclick='cancelAlert()'>Cancelar</button><button onclick='editProduct("+id+")'>Salvar</button></div></div></div>"
    document.getElementById("alert").innerHTML = buffer
}

function cancelAlert(){
    document.getElementById("alert").innerHTML = ""
}

updateTableUser()
updateTableProduct()