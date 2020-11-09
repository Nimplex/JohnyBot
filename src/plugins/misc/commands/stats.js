exports.exec = async ({ message, args }) => {
  let commands = 0
  Johny.plugins.forEach(plugin => { commands += plugin.commands.length })
  Johny.models.embed({
    object: message,
    fields: [
      ['Mem Usage', `\`\`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\`\`\``, true],
      ['Users', `\`\`\`${Johny.users.cache.size.toLocaleString()}\`\`\``, true],
      ['Servers', `\`\`\`${Johny.guilds.cache.size.toLocaleString()}\`\`\``, true],
      ['Channels', `\`\`\`${Johny.channels.cache.size.toLocaleString()}\`\`\``, true],
      ['Commands count', `\`\`\`${commands}\`\`\``, true],
      ['Plugins count', `\`\`\`${Johny.plugins.length}\`\`\``, true]
    ]
  })
}

exports.data = {
  triggers: ['stats'],
  description: 'Shows bot stats.',
  usage: undefined,
  permissions: {
    bot: [],
    user: []
  }
}