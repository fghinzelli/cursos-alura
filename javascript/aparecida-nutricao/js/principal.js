var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");
var tdImc = paciente.querySelector(".info-imc");

var peso = parseInt(tdPeso.textContent);
var altura = parseInt(tdAltura.textContent);

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso > 1000) {
	console.log("Peso inválido");
	tdImc.textContent = "Peso inválido!";
	pesoEhValido = false;
}

if (altura <= 0 || altura > 3) {
	console.log("Altura inválida");
	tdImc.textContent = "Altura Inválida";
	alturaEhValida = false;
}

if (pesoEhValido && alturaEhValida) {
	var imc = peso / (altura * altura);
	tdImc.textContent = imc;
}
