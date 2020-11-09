exports.exec = async ({ message, args }) => {
  Johny.models.embed({
    object: message,
    fields: [
      ['Bot', `\`\`\`${Math.abs(Date.now() - message.createdTimestamp)}ms\`\`\``]
    ]
  })
}

exports.data = {
  triggers: ['ping'],
  description: 'pong :P.',
  usage: undefined,
  permissions: {
    bot: [],
    user: []
  }
}