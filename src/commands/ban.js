exports.execute = (client, message, args) => {
  const mention = message.mentions.members.first()
  if (!mention) return client.modules.error(message, 'You should mention someone first.')
  if (!mention.bannable) return client.modules.error(message, `You can't ban ${mention.user.tag}.`)
  const reason = args.slice(1).join(' ')
  try {
    if (reason) {
      mention.ban()
      client.modules.embed({
        message: message,
        author: [`${mention.user.tag} has been banned.`, mention.user.displayAvatarURL]
      })
    } else {
      mention.ban({ reason: reason, days: 7 })
      client.modules.embed({
        message: message,
        author: [`${mention.user.tag} has been banned.`, mention.user.displayAvatarURL]
      })
    }
  } catch(error) {
    return client.modules.error(message, error)
  }
}

exports.info = {
  triggers: ['ban'],
  description: 'Ban someone.',
  usage: '<@mention> [reason]',
  permissions: {
    bot: ['BAN_MEMBERS'],
    member: ['BAN_MEMBERS'],
    developer: false
  }
}