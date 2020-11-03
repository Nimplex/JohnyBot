exports.execute = (client, message, args) => {
  client.modules.embed({
    message: message
  })
}

exports.info = {
  triggers: ['test']
}