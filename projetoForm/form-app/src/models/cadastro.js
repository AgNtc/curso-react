function validarCPF(cpf) {
    if (cpf.length !== 11) {
        return {
            valido: false,
            texto: "Cpf deve ter 11 digitos digitos"
        }
    } else {
        return {
            valido: true,
            texto: ""
        }
    }
}
function validarSenha(senha) {
    if (senha.length < 4 || senha.length >72) {
        return {
            valido: false,
            texto: "Senha deve ter entre 4 e 20 digitos"
        }
    } else {
        return {
            valido: true,
            texto: ""
        }
    }
}


export {validarCPF, validarSenha}