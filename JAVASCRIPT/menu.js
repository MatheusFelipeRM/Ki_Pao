function updateTableUser(){
    document.getElementById("table-usuario").innerHTML = ""
    for(i in funcionarios){
        document.getElementById("table-usuario").innerHTML += "<tr> <td>"+funcionarios[i]['nome']+"</td><td>"+funcionarios[i]['matricula']+"</td><td>"+funcionarios[i]['senha']+"</td><td>"+funcionarios[i]['idade']+"</td><td><button onclick='alertEditFuncionario("+i+")'>Editar</button><button onclick='deleteUsuario("+i+")'>Remover</button></td></tr>"
    }
}

function updateTableProduct(){
    document.getElementById("table-produto").innerHTML = ""
    for(i in produtos){
        document.getElementById("table-produto").innerHTML += "<tr><td>"+produtos[i]['nome']+"</td><td>"+produtos[i]['preco']+"</td><td>"+produtos[i]['serial']+"</td><td><button onclick='alertEditProduct("+i+")'>Editar</button><button onclick='deleteProduct("+i+")'>Remover</button></td></tr>"
    }
}

    
function editFuncionario(id){
    var nome = document.getElementById("editFuncionarioName").value
    var matricula = document.getElementById("editFuncionarioMatricula").value
    var senha = document.getElementById("editFuncionarioSenha").value
    var idade = document.getElementById("editFuncionarioIdade").value

    funcionarios[id]["nome"] = nome
    funcionarios[id]["matricula"] = matricula
    funcionarios[id]["senha"] = senha
    funcionarios[id]["idade"] = idade
    alert("Usuario editado com sucesso!")
    updateTableUser()
    cancelAlert()
}

function deleteUsuario(id){
    funcionarios.splice(id, 1)
    updateTableUser()
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








function addFuncionario(){
    var nome = document.getElementById("addNome").value
    var matricula = document.getElementById("addMatricula").value
    var senha = document.getElementById("addSenha").value
    var idade = document.getElementById('addIdade').value
    var buffer = {nome: nome, matricula: matricula, senha: senha, idade: idade}
    funcionarios.push(buffer)
    updateTableUser()
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




















function alertAddFuncionario(){
    var buffer = "<div class='container-alert'><div class='labels'><label>Nome:</label><input type='text' id='addNome'><label>matricula:</label><input type='text' id='addMatricula'><label>senha:</label><input type='text' id='addSenha'><label>idade</label><input id='addIdade'></input><div class='buttons-alert'><button onclick='cancelAlert()'>Cancelar</button><button onclick='addFuncionario()'>Salvar</button></div></div></div>"
    document.getElementById("alert").innerHTML = buffer
}
















function alertEditProduct(id){
    var buffer = "<div class='container-alert'><div class='labels'><label>Nome:</label><input type='text' id='editProductName' value="+produtos[id]['nome']+"><label>Valor:</label><input type='text' id='editProductValue' value="+produtos[id]['preco']+"><label>Serial:</label><input type='text' id='editProductSerial' value="+produtos[id]['serial']+"><div class='buttons-alert'><button onclick='cancelAlert()'>Cancelar</button><button onclick='editProduct("+id+")'>Salvar</button></div></div></div>"
    document.getElementById("alert").innerHTML = buffer
}

function alertEditFuncionario(id){
    var buffer = "<div class='container-alert'><div class='labels'><label>Nome:</label><input type='text' id='editFuncionarioName' value="+funcionarios[id]['nome']+"><label>Matrícula:</label><input type='text' id='editFuncionarioMatricula' value="+funcionarios[id]['matricula']+"><label>Senha:</label><input type='text' id='editFuncionarioSenha' value="+funcionarios[id]['senha']+"><label>Idade:</label><input type='text' value="+funcionarios[id]['idade']+" id='editFuncionarioIdade'><div class='buttons-alert'><button onclick='cancelAlert()'>Cancelar</button><button onclick='editFuncionario("+id+")'>Salvar</button></div></div></div>"
    document.getElementById("alert").innerHTML = buffer
}

function cancelAlert(){
    document.getElementById("alert").innerHTML = ""
}

updateTableUser()
updateTableProduct()