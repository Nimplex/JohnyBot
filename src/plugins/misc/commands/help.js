exports.exec = async ({ message, args }) => {
  if (args[0]) {
    const plugin = Johny.plugins.find(plugin => plugin.id == (args[0] ? args[0].toLowerCase() : '*'))
    if (!plugin) {
      let command
      await Johny.plugins.forEach(plugin => {
        const match = plugin.commands.find(cmd => cmd.data.triggers && cmd.data.triggers.includes(args[0].toLowerCase()))
        if (match) command = match
      })
      if (!command) return
      Johny.models.embed({
        object: message,
        title: `${command.data.triggers[0]} - Help`,
        fields: [
          ['Triggers', `\`\`\`${command.data.triggers}\`\`\``],
          ['Description', `\`\`\`${command.data.description}\`\`\``],
          ['Usage', `\`\`\`${Johny.prefix}${command.data.triggers[0]} ${command.data.usage || ''}\`\`\``]
        ]
      })
    } else {
      let commands = []
      plugin.commands.forEach(command => {
        if (commands.includes(command.data.triggers[0])) return
        commands.push(command.data.triggers[0])
      })
      Johny.models.embed({
        object: message,
        title: `${plugin.name}`,
        description: `\`\`\`${commands}\`\`\``
      })
    }
  } else {
    let help = []
    await Johny.plugins.forEach(plugin => {
      help.push([plugin.name, `\`${Johny.prefix}help ${plugin.id}\``])
    })
    Johny.models.embed({
      object: message,
      title: 'Avaible plugins',
      fields: help
    })
  }
}

exports.data = {
  triggers: ['help'],
  description: 'help',
  usage: '[command/plugin]',
  permissions: {
    bot: [],
    user: []
  }
}