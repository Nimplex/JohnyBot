exports.execute = async ({ message, args }) => {
  const mention = message.mentions.members.first()
  if (!mention) return Johny.models.error(message, 'You should mention someone first.')
  if (!mention.kickable) return Johny.models.error(message, `You can't kick ${mention.user.tag}.`)
  const reason = args.slice(1).join(' ')
  try {
    if (!reason) {
      mention.kick()
      Johny.models.embed({
        object: message,
        author: [`${mention.user.tag} has been kicked.`, mention.user.displayAvatarURL]
      })
    } else {
      mention.kick(reason)
      Johny.models.embed({
        object: message,
        author: [`${mention.user.tag} has been kicked.`, mention.user.displayAvatarURL]
      })
    }
  } catch(error) {
    return Johny.models.error(message, error)
  }
}

exports.data = {
  triggers: ['kick'],
  description: 'Kick someone.',
  usage: '<@mention> [reason]',
  permissions: {
    bot: ['KICK_MEMBERS'],
    member: ['KICK_MEMBERS'],
  }
}