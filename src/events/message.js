module.exports = message => {
  if (message.author.bot || !message.guild || !message.content.startsWith(Johny.prefix)) return
  require('../handlers/command')(message)
}