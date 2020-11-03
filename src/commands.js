const { green } = require('chalk')
const { readdirSync } = require('fs')
const { join } = require('path')

module.exports = client => {
  const files = readdirSync(join(__dirname, 'commands'))
  files.forEach(element => {
    const command = require(`./commands/${element}`)
    command.info.triggers.forEach(trigger => client.commands.set(trigger, command))
    console.log(`${green('[+]')} ${element}`)
  })
}