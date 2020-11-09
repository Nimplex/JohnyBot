const commands = require('fs').readdirSync(`${__dirname}/commands/`)
  .filter(file => file !== 'index.js')
  .map(file => require(`${__dirname}/commands/${file}`))

module.exports = {
  name: ':hammer: Moderation',
  id: 'moderation',
  commands: commands,
  dev: false
}
