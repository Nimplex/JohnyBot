exports.execute = async ({ message, args }) => {
  const mention = message.mentions.members.first()
  if (!mention) return Johny.models.error(message, 'You should mention someone first.')
  if (!mention.bannable) return Johny.models.error(message, `You can't ban ${mention.user.tag}.`)
  const reason = args.slice(1).join(' ')
  try {
    if (!reason) {
      mention.ban()
      Johny.models.embed({
        object: message,
        author: [`${mention.user.tag} has been banned.`, mention.user.displayAvatarURL]
      })
    } else {
      mention.ban({ reason: reason, days: 7 })
      Johny.models.embed({
        object: message,
        author: [`${mention.user.tag} has been banned.`, mention.user.displayAvatarURL]
      })
    }
  } catch(error) {
    return Johny.models.error(message, error)
  }
}

exports.data = {
  triggers: ['ban'],
  description: 'Ban someone.',
  usage: '<@mention> [reason]',
  permissions: {
    bot: ['BAN_MEMBERS'],
    member: ['BAN_MEMBERS'],
  }
}