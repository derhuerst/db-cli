#!/usr/bin/env node
'use strict'

const mri = require('mri')
const chalk = require('chalk')
const hafas = require('db-hafas')
const createDeparturesCli = require('hafas-cli/departures')

const pkg = require('./package.json')

const argv = mri(process.argv.slice(2), {
	boolean: [
		'help', 'h',
		'version', 'v',
		'location', 'l'
	]
})

if (argv.help || argv.h) {
	process.stdout.write(`
db-dep [station] [options]

Arguments:
    station         Station number (like 8000191) or search string (like "Karlsruhe Hbf").

Options:
    --location  -l  Use current location. OS X only.
    --duration  -d  Show departures for the next n minutes. Default: 15
    --when      -w  A date & time string like "tomorrow 2 pm". Default: now
    --products  -p  Allowed transportation types.
                    Default: ICE,IC,EC,RE,RB,IR,S,B,F,U,T,Taxi

`)
	process.exit(0)
}

if (argv.version || argv.v) {
	process.stdout.write(`db-dep v${pkg.version}\n`)
	process.exit(0)
}

const showError = function (err) {
	if (process.env.NODE_DEBUG === 'db-cli') console.error(err)
	else process.stderr.write(chalk.red(err.message || (err + '')) + '\n')
	process.exit(err.code || 1)
}

const departuresCli = createDeparturesCli(hafas, {})
departuresCli({
	station: argv._[0],
	useCurrentLocation: argv.location || argv.l,
	duration: argv.duration || argv.d,
	queryDuration: (argv.duration || argv.d) === true,
	when: argv.when || argv.w,
	queryWhen: (argv.when || argv.w) === true,
	products: argv.products || argv.p,
	queryProducts: (argv.products || argv.p) === true
})
.catch(showError)
