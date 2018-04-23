'use strict'

const productColor = (p) => {
	if (p === 'suburban') return '#008c4f'
	if (p === 'subway') return '#0067ac'
	if (p === 'nationalExp' || p === 'national') return '#f4e613'
	if (p === 'regionalExp' || p === 'regional') return '#D9222A'
	return '#999999'
}

module.exports = productColor
