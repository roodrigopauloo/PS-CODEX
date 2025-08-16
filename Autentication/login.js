document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  const input = document.getElementById("nome");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Nome digitado:", input.value);
  });
});
