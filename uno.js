function mostrar() {
	var valorDolarOficial;
	var valorDolarBlue;
	var flag = 0;
	var dolarConMayorCotizacion;
	var acumuladorDolarBlue = 0;
	var acumuladorDolarOficial = 0;
	var promedioDolarBlue;
	var promedioDolarOficial;
	var cotMasAltaBlue;
	var cotMasAltaOficial;
	var cotMasBajaBlue;

	for (i = 5; i > 0; i--) {
		do {
			valorDolarOficial = parseFloat(prompt("Ingrese la cotización del dólar oficial : "));
		} while ((isNaN(valorDolarOficial)) || (!(valorDolarOficial > 0)));
		do {
			valorDolarBlue = parseFloat(prompt("Ingrese la cotización del dólar blue : "));
		} while ((isNaN(valorDolarBlue)) || (!(valorDolarBlue > 0)));
		if (flag == 0) {
			cotMasAltaOficial = valorDolarOficial;
			cotMasBajaBlue = valorDolarBlue;
			cotMasAltaBlue = valorDolarBlue;
			flag = 1
		}
		if (cotMasAltaOficial < valorDolarOficial) {
			cotMasAltaOficial = valorDolarOficial;
		}
		if (cotMasBajaBlue > valorDolarBlue) {
			cotMasBajaBlue = valorDolarBlue;
		} else {
			cotMasAltaBlue = valorDolarBlue
		}
		acumuladorDolarBlue = acumuladorDolarBlue + valorDolarBlue;
		acumuladorDolarOficial = acumuladorDolarOficial + valorDolarOficial;
	}
	promedioDolarBlue = acumuladorDolarBlue / 5;
	promedioDolarOficial = acumuladorDolarOficial / 5;
	if (promedioDolarBlue > promedioDolarOficial) {
		dolarConMayorCotizacion = "blue";
	} else[
		dolarConMayorCotizacion = "oficial"
	]
	document.getElementById("txtIdCoti").value = dolarConMayorCotizacion;
	document.getElementById("txtIdCotiOficial").value = cotMasAltaOficial;
	document.getElementById("txtIdCotiBlue").value = cotMasBajaBlue;
}