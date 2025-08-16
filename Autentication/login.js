document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");
    const input = document.getElementById("nome");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nome = input.value.trim();
        if (!nome) {
            alert("Digite um nome válido!");
        return;
        }

        localStorage.setItem("nomeUsuario", nome);
        window.location.href = "boasVindas.html";
});
});