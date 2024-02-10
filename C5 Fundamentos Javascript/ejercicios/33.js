function esNumeroPrimo(numero) {
	// Un número primo debe ser mayor que 1
	if (numero <= 1) {
		return false
	}

	// Verificar si el número es divisible por algún número
	// entre 2 y la raíz cuadrada del número
	for (let i = 2; i <= Math.sqrt(numero); i++) {
		if (numero % i === 0) {
			// Si es divisible, no es primo
			return false
		}
	}

	// Si no es divisible por ningún número excepto 1 y él mismo, es primo
	return true
}

module.exports = esNumeroPrimo
