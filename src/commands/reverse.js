exports.execute = (client, message, args) => {
  if (!args[0]) return client.modules.error(message, 'Please provide valid arguments.')
  const text = args.join(' ').split('').reverse().join('')
  client.modules.embed({
    message: message,
    title: `:arrows_counterclockwise: Reverse`,
    description: `\`\`\`${text}\`\`\``
  })
}

exports.info = {
  triggers: ['reverse'],
  description: 'Reverse text.',
  usage: '<text to reverse>',
  permissions: {
    bot: [],
    member: [],
    developer: false
  },
  category: 'fun'
}