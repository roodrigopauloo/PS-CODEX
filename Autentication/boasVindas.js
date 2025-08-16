document.addEventListener("DOMContentLoaded", () => {
  const saudacao = document.getElementById("saudacao");
  const botaoSair = document.getElementById("sair"); // Adicionada esta linha

  const nome = localStorage.getItem("nomeUsuario");

  if (!nome) {
    // Se não tiver nome salvo, volta para login
    window.location.href = "index.html";
    return;
  }

  // Mostra o nome armazenado
  saudacao.textContent = `Olá, ${nome}!`;

  // Adicionada a funcionalidade de Sair
  botaoSair.addEventListener("click", () => {
    localStorage.removeItem("nomeUsuario"); // Limpa o nome do localStorage
    window.location.href = "index.html"; // Redireciona para a página de login
  });
});
