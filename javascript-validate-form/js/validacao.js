const tiposDeErro = [
    'valueMissing', 'typeMismatch', 'patternMismatch', 'customError'
]


const mensagensDeErro = {
    nome:   {
        valueMissing: 'O campo nome não pode estar vazio.'
    },
    email: {
        valueMissing: 'O campo email não pode estar vazio',
        typeMismatch: 'O email digitado não é válido'
    }, 
    senha: {
        valueMissing: 'O campo de senha não pode estar vazio',
        patternMismatch: 'A senha deve conter entre 6 e 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos'
    },
    dataNascimento: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio',
        customError: 'Você deve ser maior de 18 anos para se cadastrar'
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio',
        customError: 'O valor informado não é válido'
    }
}

const validadores = {
    dataNascimento: input => validaDataNascimento(input),
    cpf: input => validaCPF(input)
}

export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if (input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido');
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = '';
    } else {
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }

}

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = '';
    tiposDeErro.forEach(erro => {
        if (input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })
    return mensagem;
}

function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value);
    let mensagem = '';
    if (!maiorQue18(dataRecebida)) {
        mensagem = 'Você deve ser maior de 18 anos para se cadastrar.'
    }

    input.setCustomValidity(mensagem)
}

function maiorQue18(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth() , data.getUTCDate());

    return dataMais18 <= dataAtual;
;}

function validaCPF(input) {
    const cpfFormatado = input.value.replace(/\D/g, '');
    console.log(cpfFormatado)
    let mensagem = '';

    if (checaCPFNumerosRepetidos(cpfFormatado) || !checaEstruturaCPF(cpfFormatado)) {
        mensagem = 'O CPF digitado não é válido.'
    }

    input.setCustomValidity(mensagem);
}

export function checaCPFNumerosRepetidos(valor) {
    let qtdRepeticoes = 0;
    for (let i = 0; i < valor.length; i++) {
        if (valor[i] === valor[0]) {
            qtdRepeticoes++;
        } 
    }

    return qtdRepeticoes === valor.length;
}

function checaEstruturaCPF (cpf) {
    return validaDigitoVerificador(cpf, 10) && validaDigitoVerificador(cpf, 11)
}

function validaDigitoVerificador(cpf, posicao) {
    let cpfSemDigitos = cpf.substr(0, posicao - 1).split('')
    let indice = posicao;
    let soma = 0;
    let resultado = 0;
    for(let i = 0; i < cpfSemDigitos.length; i++) {
        soma = soma + (indice * parseInt(cpfSemDigitos[i]));
        indice--;
    }
    let resto = soma % 11;
    if (resto > 1) {
        resultado = 11 - resto;
    } 
    let final = resultado == parseInt(cpf[posicao - 1])
    return final;
}
