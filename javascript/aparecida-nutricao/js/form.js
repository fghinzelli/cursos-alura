var botaoEnviar = document.querySelector("#adicionar-paciente");
botaoEnviar.addEventListener("click", function(event) {
	event.preventDefault();
	var form = document.querySelector("#form-adiciona");
	var tabelaPacientes = document.querySelector("#tabela-pacientes");
	var paciente = obtemPacienteDoFormulario(form);

	var erros = validaPaciente(paciente);

	if (erros.length > 0) {
		exibeMensagensErro(erros);
		return;
	}
	 
	adicionaPacienteTabela(paciente);

	var mensagensErro = document.querySelector("#erros");
	mensagensErro.innerHTML = "";
	form.reset();
});

function adicionaPacienteTabela(paciente) {
	var pacienteTr = montaTr(paciente);
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);
}


function exibeMensagensErro(erros) {
		var listaErros = document.querySelector("#erros");
		listaErros.innerHTML = "";
		for(var i=0; i<erros.length;i++) {
			var li = document.createElement("li");
			li.textContent = erros[i];
			listaErros.appendChild(li);
		}
}

function obtemPacienteDoFormulario(form) {
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;
}
 
function validaPaciente(paciente) {
	var erros = [];
	if (paciente.nome.length == 0) erros.push("O nome não pode estar em branco");
	if (paciente.peso.length == 0) erros.push("O peso não pode estar em branco");
	if (paciente.altura.length == 0) erros.push("A altura não pode estar em branco");
	if (paciente.gordura.length == 0) erros.push("A gordura não pode estar em branco");
	if (!validaPeso(paciente.peso)) erros.push("Peso é inválido!");
	if (!validaAltura(paciente.altura)) erros.push("Altura é inválida!");
	return erros;
}


function montaTr(paciente) {
	
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");
	
	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
	return pacienteTr;
}

function montaTd(dado, classe) {
	var td = document.createElement("td");
	td.classList.add(classe);
	td.textContent = dado;
	return td;
}
