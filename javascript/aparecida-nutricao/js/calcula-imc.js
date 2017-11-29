var titulo = document.querySelector(".titulo");
titulo.textContent = "Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i=0; i<pacientes.length; i++) {
	
	var paciente = pacientes[i];
	var tdPeso = paciente.querySelector(".info-peso");
	var tdAltura = paciente.querySelector(".info-altura");
	var tdImc = paciente.querySelector(".info-imc");
	
	var peso = tdPeso.textContent;
	var altura = tdAltura.textContent;
	
	var pesoEhValido = true;
	var alturaEhValida = true;
	
	if (peso <= 0 || peso > 1000) {
		tdImc.textContent = "Peso inválido!";
		pesoEhValido = false;
		paciente.classList.add('paciente-invalido');
	}
	
	if (altura <= 0 || altura > 3) {
		tdImc.textContent = "Altura Inválida";
		alturaEhValida = false;
		paciente.classList.add('paciente-invalido');
	}
	
	if (pesoEhValido && alturaEhValida) {
		tdImc.textContent = calculaImc(peso, altura);	
	}
}

function calculaImc(peso, altura) {
	var imc = peso / (altura * altura);
	return imc.toFixed(2);
}

