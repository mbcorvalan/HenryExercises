function esImpar(num) {
	// Retorna true si "num" es impar.
	// De lo contrario, retorna false.
	// Tu código:
	return Math.abs(num) % 2 !== 0 ? true : false
}

module.exports = esImpar
