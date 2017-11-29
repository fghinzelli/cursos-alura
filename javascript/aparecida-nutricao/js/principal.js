var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");
var tdImc = paciente.querySelector(".info-imc");

var peso = parseInt(tdPeso.textContent);
var altura = parseInt(tdAltura.textContent);

var imc = peso / (altura * altura);

tdImc.textContent = imc;
