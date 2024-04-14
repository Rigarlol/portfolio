const formulario = document.querySelector('.formulario');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const assuntoInput = document.getElementById('assunto');
const mensagemInput = document.getElementById('mensagem');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); //evita que o formulário seja enviado

    //nome
    if (nomeInput.value.trim() === "") {
        alert("Por favor, preencha o campo nome");
        return;
    } else if (nomeInput.value.length > 50) {
        nomeInput.value = "";
        alert('Não ultrapassar 50 caracteres');
        return;
    }

    //emaiil
    if (emailInput.value.trim() === "" || !validacaoEmail(emailInput.value)) {
        alert('Por favor, preencha o campo email');
        return;
    }

    //assunto
    if (assuntoInput.value.trim() === "") {
        alert('Por favor, Preencha o campo assunto');
        return;
    } else if (assuntoInput.value.length > 50) {
        alert('Não ultrapasse 50 caracteres')
        assuntoInput.value = ""
        return;
    };

    //mensagem
    if (mensagemInput.value.trim() === "") {
        alert('Preencha o campo de mensagem!');
        return;
    } else if (mensagemInput.value.length > 300) {
        alert('A mensagem deve ter no máximo 300 caracteres')
        mensagemInput.value = mensagemInput.value.substring(0, 300);
        return;
    }

    formulario.submit();
});

function validacaoEmail(email) {
    // cria uma regex pra validar o email
    const emailRegex = new RegExp (
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    );

    if (emailRegex.test(email)) {
        return true;
    } 

    return false;
}
