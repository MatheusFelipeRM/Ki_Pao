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
 
 
