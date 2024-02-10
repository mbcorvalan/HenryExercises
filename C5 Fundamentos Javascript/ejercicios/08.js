function esNumeroEntero(numero) {
	// La función recibe un argumento "numero".
	// Verifica si este es un número entero o no.
	// Returna true si lo es, de lo contrario, retorna false.
	// Tu código:
	return typeof numero === 'number' && Number.isInteger(numero)

	//numero % 2 === 0 es para ver si es par, tener en cuenta que puede ser -0 o 0
}

module.exports = esNumeroEntero
