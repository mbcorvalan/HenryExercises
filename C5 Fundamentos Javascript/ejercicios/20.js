function esVocal(letra) {
	// Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
	// Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
	// Si no es vocal, tambien debe retornar "Dato incorrecto".
	// Tu código:
	const lowCase = letra.toLowerCase()

	if (lowCase.lenght > 1) {
		return 'Dato incorrecto '
	} else if ('aeiou'.includes(lowCase)) {
		return 'Es vocal'
	} else {
		return 'Dato incorrecto'
	}
}

module.exports = esVocal