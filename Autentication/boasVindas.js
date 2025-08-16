document.addEventListener("DOMContentLoaded", () => {
  const saudacao = document.getElementById("saudacao");

  const nome = localStorage.getItem("nomeUsuario");

  if (!nome) {
    // Se não tiver nome salvo, volta para login
    window.location.href = "index.html";
    return;
  }

  // Mostra o nome armazenado
  saudacao.textContent = `Olá, ${nome}!`;
});
