/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

//Variables:

	let NumeroUno;
	let NumeroDos;
	let Total;

//Funciones:

	function sumar()
{	
	NumeroUno = document.getElementById("txtIdNumeroUno").value;
	NumeroDos = document.getElementById("txtIdNumeroDos").value;

	Total = parseInt(NumeroUno) + parseInt(NumeroDos);

	alert("La suma es " + Total);
}

	function restar()
{
	NumeroUno = document.getElementById("txtIdNumeroUno").value;
	NumeroDos = document.getElementById("txtIdNumeroDos").value;

	Total = parseInt(NumeroUno) - parseInt(NumeroDos);

	alert("La resta es " + Total);
}

	function multiplicar()
{ 
	NumeroUno = document.getElementById("txtIdNumeroUno").value;
	NumeroDos = document.getElementById("txtIdNumeroDos").value;

	Total = parseInt(NumeroUno) * parseInt(NumeroDos);

	alert("El producto es " + Total);
}

	function dividir()
{
	NumeroUno = document.getElementById("txtIdNumeroUno").value;
	NumeroDos = document.getElementById("txtIdNumeroDos").value;

	Total = parseInt(NumeroUno) / parseInt(NumeroDos);

	alert("La division es " + Total);
}