/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

//Variables

	let NumeroDividendo;
	let NumeroDivisor;
	let Resto;

function SacarResto()
{
	NumeroDividendo = document.getElementById("txtIdNumeroDividendo").value;
	NumeroDivisor = document.getElementById("txtIdNumeroDivisor").value;

	Resto = parseInt(NumeroDividendo) % parseInt(NumeroDivisor);

	alert("El resto es " + Resto);
}
