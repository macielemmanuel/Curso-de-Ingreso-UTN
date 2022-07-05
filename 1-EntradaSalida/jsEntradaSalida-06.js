/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let NumeroUno;
	let NumeroDos;
	let Total
	
	NumeroUno = document.getElementById("txtIdNumeroUno").value;
	NumeroDos = document.getElementById("txtIdNumeroDos").value;


	Total = parseInt(NumeroUno) + parseInt(NumeroDos);


	alert("La suma es " + Total);
}

