exports.exec = async ({ message, args }) => {
  if (!args[0]) return Johny.models.error(message, 'Please provide valid arguments.')
  const text = args.join(' ').split('').reverse().join('')
  Johny.models.embed({
    object: message,
    title: `:arrows_counterclockwise: Reverse`,
    description: `\`\`\`${text}\`\`\``
  })
}

exports.data = {
  triggers: ['reverse'],
  description: 'Reverse text.',
  usage: '<text>',
  permissions: {
    bot: [],
    user: []
  }
}