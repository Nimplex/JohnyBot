exports.execute = (client, message, args) => {
  const mention = message.mentions.members.first()
  if (!mention) return client.modules.error(message, 'You should mention someone first.')
  if (!mention.bannable) return client.modules.error(message, `You can't ban ${mention.user.tag}.`)
  const reason = args.slice(1).join(' ')
  try {
    if (!reason) {
      mention.kick()
      client.modules.embed({
        message: message,
        author: [`${mention.user.tag} has been kicked.`, mention.user.displayAvatarURL]
      })
    } else {
      mention.kick(reason)
      client.modules.embed({
        message: message,
        author: [`${mention.user.tag} has been kicked.`, mention.user.displayAvatarURL]
      })
    }
  } catch(error) {
    return client.modules.error(message, error)
  }
}

exports.info = {
  triggers: ['kick'],
  description: 'Kick someone.',
  usage: '<@mention> [reason]',
  permissions: {
    bot: ['KICK_MEMBERS'],
    member: ['KICK_MEMBERS'],
    developer: false
  }
}