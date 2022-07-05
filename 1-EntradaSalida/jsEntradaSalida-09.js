/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

//Variables

	let sueldo;
	let aumento;

function mostrarAumento()
{
	aumento = 1.10;
	sueldo = document.getElementById("txtIdSueldo").value;

	parseInt(sueldo)

	document.getElementById("txtIdResultado").value = sueldo * aumento;

	alert("Su aumento es del 10%");
}
