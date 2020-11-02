exports.execute = async(client, message, args) => {
  message.reply(args[0])
}

exports.info = {
  triggers: ['test'],
  description: 'test'
}