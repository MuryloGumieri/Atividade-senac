function fazerRegistro() {
    
    
    const nome = document.getElementById("nome").value;
    
    const email = document.getElementById("email").value;
    
    const senha = document.getElementById("senha").value;
   
    const confirmarSenha = document.getElementById("confirmarSenha").value;
  
    const mensagem = document.getElementById("mensagem");

    if (!nome || !email || !senha || !confirmarSenha) {
        mensagem.innerText = "Preencha todos os campos!";
        mensagem.style.color = "red";
        return;
    }

    if(senha !== confirmarSenha) {
        mensagem.innerText = "As senhas não coincidem!";
        mensagem.style.color = "red";
        return;
    }

    mensagem.innerText = "Registro com sucesso!"
  
  
    mensagem.style.color = "green"
}