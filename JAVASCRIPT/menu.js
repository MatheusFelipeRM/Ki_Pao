function updateTableUser() {
    document.getElementById("table-usuario").innerHTML = ""
    for (i in funcionarios) {
        document.getElementById("table-usuario").innerHTML += "<tr> <td>" + funcionarios[i]['nome'] + "</td><td>" + funcionarios[i]['matricula'] + "</td><td>" + funcionarios[i]['senha'] + "</td><td>" + funcionarios[i]['idade'] + "</td><td><button onclick='alertEditFuncionario(" + i + ")'>Editar</button><button class='delete' onclick='deleteUsuario(" + i + ")'>Remover</button></td></tr>"
    }
}

function updateTableProduct() {
    document.getElementById("table-produto").innerHTML = ""
    for (i in produtos) {
        document.getElementById("table-produto").innerHTML += "<tr><td>" + produtos[i]['nome'] + "</td><td>R$" + produtos[i]['preco'] + "</td><td>" + produtos[i]['serial'] + "</td><td><button onclick='alertEditProduct(" + i + ")'>Editar</button><button class='delete' onclick='deleteProduct(" + i + ")'>Remover</button></td></tr>"
    }
}


function editFuncionario(id) {
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

function deleteUsuario(id) {
    funcionarios.splice(id, 1)
    updateTableUser()
}

function addProduct() {
    var nome = document.getElementById("addProductName").value
    var valor = parseFloat(document.getElementById("addProductValue").value)
    var serial = document.getElementById("addProductSerial").value
    if (isNaN(parseInt(serial)) || isNaN(valor) || nome.length == 0) {
        alert("Existem campos vazios!")
        return
    } else if (parseInt(serial) <= 0) {
        alert("O serial não pode ser menor ou igual a 0!")
        return
    } else if (valor <= 0) {
        alert("O valor não pode ser menor ou igual a 0!")
        return
    }

    var buffer = { nome: nome, preco: valor, serial: serial }
    produtos.push(buffer)
    updateTableProduct()
    cancelAlert()
}

function addFuncionario() {
    var nome = document.getElementById("addNome").value
    var matricula = parseInt(document.getElementById("addMatricula").value)
    var senha = document.getElementById("addSenha").value
<<<<<<< HEAD
    var idade = document.getElementById('addIdade').value
    var buffer = {nome: nome, matricula: matricula, senha: senha, idade: idade}
=======
    var idade = parseInt(document.getElementById("addIdade").value)
    for (i in funcionarios) {
        if (funcionarios[i]["matricula"] == matricula) {
            alert("Esse essa matricula já existe!")
            return
        }
    }
    if (nome.length == 0 || isNaN(matricula) || senha.length == 0 || isNaN(idade)) {
        alert("Preencha todos os campos!")
        return
    } else if (idade <= 0) {
        alert("A idade não pode ser menor ou igual a 0!")
        return
    } else if (matricula <= 0) {
        alert("A matricula não pode ser menor ou igual a 0!")
        return
    }

    var buffer = { nome: nome, matricula: matricula, senha: senha, idade: idade }
>>>>>>> 8e38be72e41051868815c12e5bf55f30e1cd4855
    funcionarios.push(buffer)
    updateTableUser()
    cancelAlert()
}

function deleteProduct(id) {
    produtos.splice(id, 1)
    updateTableProduct()
}

function editProduct(id) {
    var nome = document.getElementById("editProductName").value
    var valor = document.getElementById("editProductValue").value
    var serial = document.getElementById("editProductSerial").value
    if (isNaN(parseFloat(valor)) || parseFloat(valor) <= 0) {
        alert("O valor precisa ser maior que 0!")
        return
    } else if (isNaN(parseInt(serial)) || parseInt(serial) <= 0) {
        alert("O serial não pode ser vazio ou menor ou igual a 0!")
        return
    } else {
        for (i in produtos) {
            if (i != id) {
                if (produtos[i]["serial"] == serial) {
                    alert("Esse serial já existe!")
                    return
                }
            }
        }
    }

    produtos[id]["nome"] = nome
    produtos[id]["valor"] = valor
    produtos[id]["serial"] = serial
    updateTableProduct()
    cancelAlert()
}

function alertAddProduct() {
    var buffer = "<div class='container-alert'><div class='labels'><label>Nome:</label><input type='text' id='addProductName'><label>Valor:</label><input type='text' id='addProductValue'><label>Serial:</label><input type='text' id='addProductSerial'><div class='buttons-alert'><button onclick='cancelAlert()'>Cancelar</button><button onclick='addProduct()'>Salvar</button></div></div></div>"
    document.getElementById("alert").innerHTML = buffer
}

<<<<<<< HEAD



















function alertAddFuncionario(){
    var buffer = "<div class='container-alert'><div class='labels'><label>Nome:</label><input type='text' id='addNome'><label>matricula:</label><input type='text' id='addMatricula'><label>senha:</label><input type='text' id='addSenha'><label>idade</label><input id='addIdade'></input><div class='buttons-alert'><button onclick='cancelAlert()'>Cancelar</button><button onclick='addFuncionario()'>Salvar</button></div></div></div>"
=======
function alertAddFuncionario() {
    var buffer = "<div class='container-alert'><div class='labels'><label>Nome:</label><input type='text' id='addNome'><label>matricula:</label><input type='number' id='addMatricula'><label>senha:</label><input type='text' id='addSenha'><label>Idade:</label><input type='number' id='addIdade'><div class='buttons-alert'><button onclick='cancelAlert()'>Cancelar</button><button onclick='addFuncionario()'>Salvar</button></div></div></div>"
>>>>>>> 8e38be72e41051868815c12e5bf55f30e1cd4855
    document.getElementById("alert").innerHTML = buffer
}

function alertEditProduct(id) {
    var buffer = "<div class='container-alert'><div class='labels'><label>Nome:</label><input type='text' id='editProductName' value=" + produtos[id]['nome'] + "><label>Valor:</label><input type='text' id='editProductValue' value=" + produtos[id]['preco'] + "><label>Serial:</label><input type='text' id='editProductSerial' value=" + produtos[id]['serial'] + "><div class='buttons-alert'><button onclick='cancelAlert()'>Cancelar</button><button onclick='editProduct(" + id + ")'>Salvar</button></div></div></div>"
    document.getElementById("alert").innerHTML = buffer
}

function alertEditFuncionario(id) {
    var buffer = "<div class='container-alert'><div class='labels'><label>Nome:</label><input type='text' id='editFuncionarioName' value=" + funcionarios[id]['nome'] + "><label>Matrícula:</label><input type='text' id='editFuncionarioMatricula' value=" + funcionarios[id]['matricula'] + "><label>Senha:</label><input type='text' id='editFuncionarioSenha' value=" + funcionarios[id]['senha'] + "><label>Idade:</label><input type='text' value=" + funcionarios[id]['idade'] + " id='editFuncionarioIdade'><div class='buttons-alert'><button onclick='cancelAlert()'>Cancelar</button><button onclick='editFuncionario(" + id + ")'>Salvar</button></div></div></div>"
    document.getElementById("alert").innerHTML = buffer
}

function cancelAlert() {
    document.getElementById("alert").innerHTML = ""
}

updateTableUser()
updateTableProduct()