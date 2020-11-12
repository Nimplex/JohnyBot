exports.exec = async ({ message, args }) => {
  if (!args[0])        return Johny.models.error(message, 'Please provide valid arguments.')
  const hastebin_link = await Johny.models.hastebin(args.join(' '))

  Johny.models.embed({
    object: message,
    title: 'Document created!',
    description: `\`\`\`link: ${hastebin_link[0]}\nraw: ${hastebin_link[1]}\`\`\``
  })
}

exports.data = {
  triggers: ['hastebin'],
  description: 'Creates document with provided text on hastebin.com.',
  usage: '<text>',
  permissions: {
    bot: [],
    user: []
  }
}