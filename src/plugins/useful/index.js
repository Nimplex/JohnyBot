const commands = require('fs').readdirSync(`${__dirname}/commands/`)
  .filter(file => file !== 'index.js')
  .map(file => require(`${__dirname}/commands/${file}`))

module.exports = {
  name: ':globe_with_meridians: Useful',
  id: 'useful',
  commands: commands,
  dev: false
}
