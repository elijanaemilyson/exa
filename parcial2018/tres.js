function Mostrar()
{
	var precio;
	var porcentaje;
	var descuento;

	precio = prompt("Ingrese el precio: ");
	porcentaje = prompt("Ingrese el porcentaje: ");
	
	precio = parseInt (precio);
	porcentaje = parseInt(porcentaje);

	descuento = precio * porcentaje / 100;

	document.getElementById("elPrecioFinal").value = descuento;


}
