exports.execute = (client, message, args) => {
  client.modules.embed({
    message: message
  })
}

exports.info = {
  triggers: ['test'],
  description: null,
  usage: null,
  permissions: {
    bot: ['BAN_MEMBERS'],
    member: ['BAN_MEMBERS'],
    developer: false
  }
}