exports.exec = async ({ message, args }) => {
  const list = args.join(' ').split(',')
  if (!list[0] || !list[1]) return Johny.models.error(message, 'Please provide valid arguments.')
  message.channel.send(list[Math.floor(Math.random() * list.length)])
}

exports.data = {
  triggers: ['choose'],
  description: 'choose.',
  usage: '<arguments1>, <argument2>, [arguments...]',
  permissions: {
    bot: [''],
    member: [''],
  }
}