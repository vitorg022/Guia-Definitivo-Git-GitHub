function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const telefone = document.getElementById('telefone').value;
    const idade = document.getElementById('idade').value;
    const erroDiv = document.getElementById('erro');

    // Limpar mensagem de erro
    erroDiv.textContent = '';

    // Validação
    if (!nome || !email || !senha || !telefone || !idade) {
        erroDiv.textContent = 'Por favor, preencha todos os campos obrigatórios!';
        return false; // Impede o envio do formulário
    }

    if (idade < 18) {
        erroDiv.textContent = 'Você precisa ter 18 anos ou mais!';
        return false; // Impede o envio do formulário
    }

    // Se passar em todas as validações
    return true;
}
