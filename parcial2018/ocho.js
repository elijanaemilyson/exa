function Mostrar()
{
	var contador = 0 ;
	var respuesta = 1 ; 
	var temperatura;
	var nombre;

	while( respuesta == 1 )
	{//Abro llave de While
		temperatura =prompt ("Ingrese una temperatura : ");
		temperatura = parseInt (temperatura);

		while(temperatura < -100 || temperatura > 100 || isNaN (temperatura))
		{
			temperatura =prompt ("Ingrese una temperatura : ");
			temperatura = parseInt (temperatura);
		}

		nombre = prompt ("Ingrese un nombre: ");

		while( != isNaN (nombre))
		{
			nombre = prompt ("Ingrese un nombre: ");
		}



		confirm("¿Desea continuar?");
	}//Cierra llave de While

}
