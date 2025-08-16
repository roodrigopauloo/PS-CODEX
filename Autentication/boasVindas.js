document.addEventListener("DOMContentLoaded", () => {
  const saudacao = document.getElementById("saudacao");
  const botaoSair = document.getElementById("sair"); 
  const botaoEditar = document.getElementById("editar");
  const nome = localStorage.getItem("nomeUsuario");

  if (!nome) {
    // Se não tiver nome salvo, volta para login
    window.location.href = "index.html";
    return;
  }

  // Mostra o nome armazenado
  saudacao.textContent = `Olá, ${nome}!`;

  // Funcionalidade de saída
  botaoSair.addEventListener("click", () => {
    localStorage.removeItem("nomeUsuario"); // Limpa o nome do localStorage
    window.location.href = "index.html"; // Redireciona para a página de login
  });

  // Funcionalidade de edição.
    botaoEditar.addEventListener("click", () => {
    window.location.href = "index.html"; // Redireciona para a página de login
  });
});
