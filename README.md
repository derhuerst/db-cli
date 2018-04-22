# db-cli

**A command line client for [Deutsche Bahn](https://en.wikipedia.org/wiki/Deutsche_Bahn).**

[![npm version](https://img.shields.io/npm/v/db-cli.svg)](https://www.npmjs.com/package/db-cli)
[![build status](https://img.shields.io/travis/derhuerst/db-cli.svg)](https://travis-ci.org/derhuerst/db-cli)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/db-cli.svg)
[![gitter channel](https://badges.gitter.im/derhuerst/vbb-rest.svg)](https://gitter.im/derhuerst/vbb-rest)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)


## Installing

```shell
npm install -g db-cli
```

Or just run it using [`npx`](https://npmjs.com/npx).


## Usage

```
db-dep [station] [options]

Arguments:
    station         Station number (like 8000191) or search string (like "Karlsruhe Hbf").

Options:
    --location  -l  Use current location. OS X only.
    --duration  -d  Show departures for the next n minutes. Default: 15
    --when      -w  A date & time string like "tomorrow 2 pm". Default: now
    --products  -p  Allowed transportation types.
                    Default: ICE,IC,EC,RE,RB,IR,S,B,F,U,T,Taxi
```

```
db-journey [origin] [destination] [options]

Arguments:
    origin          Station number (e.g. 8000191) or query (e.g. "Karlsruhe Hbf").
    destination     Station number (e.g. 8000191) or query (e.g. "Karlsruhe Hbf").

Options:
    --results   -r  The number of journeys to show. Default: 4
    --products  -p  Allowed transportation types.
                    Default: ICE,IC,EC,RE,RB,IR,S,B,F,U,T,Taxi
    --when      -w  A date & time string like "tomorrow 2 pm". Default: now
```


## Contributing

If you have a question or have difficulties using `db-cli`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/db-cli/issues).
