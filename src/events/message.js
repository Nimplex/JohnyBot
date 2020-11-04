module.exports = message => {
  if (message.author.bot) return
  Johny.models.embed({ object: message })
}