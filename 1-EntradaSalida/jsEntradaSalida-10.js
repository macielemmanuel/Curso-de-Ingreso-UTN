/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

//Variables

	let sueldo;
	let descuento;

function mostrarAumento()
{
	descuento = 0.25;

	sueldo = document.getElementById("txtIdImporte").value;

	parseInt(sueldo)

	document.getElementById("txtIdResultado").value = sueldo - (sueldo * descuento) ;

	alert("todo pillo");
}
