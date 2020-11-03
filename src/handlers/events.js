module.exports = client => {
  require('../commands.js')(client)
  client.once('ready', () => console.log(`${client.user.tag} is ready!`))
  client.on('message', message => require('./message.js')(message))
}