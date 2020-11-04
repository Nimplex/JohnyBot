exports.execute = (client, message, args) => {
  if (!args[0]) return client.modules.error(message, 'Please provide valid arguments.')
  const text = args.join(' ').split('').map(str => {
    const converted = str.charCodeAt(0).toString(2)
    return converted.padStart(8, '0')
  }).join(' ')
  client.modules.embed({
    message: message,
    title: ':desktop: Binary',
    description: `\`\`\`${text}\`\`\``
  })
}

exports.info = {
  triggers: ['binary'],
  description: 'Convert text to binary.',
  usage: '<text to convert>',
  permissions: {
    bot: [],
    member: [],
    developer: false
  },
  category: 'fun'
}