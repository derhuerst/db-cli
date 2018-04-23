'use strict'

const symbols = Object.assign(Object.create(null), {
	nationalExp: '🚄',
	national: '🚞',
	regionalExp: '🚆',
	regional: '🚆',
	suburban: '🚈',
	bus: '🚌',
	ferry: '🚢',
	subway: '🚇',
	tram: '🚋',
	taxi: '🚕'
})

const productSymbol = p => symbols[p] || null

module.exports = productSymbol
