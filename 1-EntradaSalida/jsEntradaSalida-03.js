/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombreIngresado;

	//dudosa
	//nombreIngresado = txtIdNombre.value;

	//Funcion pasa casilla de texto
	//no trae problema
	nombreIngresado = document.getElementById("txtIdNombre").value;

	alert(nombreIngresado);

}

//txtIdNombre

