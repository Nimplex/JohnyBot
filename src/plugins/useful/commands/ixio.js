exports.exec = async ({ message, args }) => {
  if (!args[0])        return Johny.models.error(message, 'Please provide valid arguments.')
  const ixio_link = await Johny.models.ixio(args.join(' '))

  Johny.models.embed({
    object: message,
    title: 'Document created!',
    description: `\`\`\`link: ${ixio_link[0]}\nraw: ${ixio_link[1]}\`\`\``
  })
}

exports.data = {
  triggers: ['ixio'],
  description: 'Creates document with provided text on ix.io.',
  usage: '<text>',
  permissions: {
    bot: [],
    user: []
  }
}