function esPar(num) {
	// Retorna true si "num" es par.
	// De lo contrario, retorna false.
	// Tu código:
	return num % 2 === 0 || num % 2 === -0 ? true : false
}

module.exports = esPar
