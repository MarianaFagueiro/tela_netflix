// Validação simples do formulário
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert('Login simulado! (Este é um protótipo)');
    } else {
        alert('Preencha todos os campos!');
    }
});