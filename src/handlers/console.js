const chalk = require('chalk')

exports.warn = message => {
  console.log(`${chalk.yellow('[warning]')} ${message}`)
}

exports.error = message => {
  console.log(`${chalk.red('[error]')} ${message}`)
}

exports.log = message => {
  console.log(`${chalk.cyan('[log]')} ${message}`)
}