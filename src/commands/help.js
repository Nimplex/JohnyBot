exports.execute = (client, message, args) => {
  if (!args[0]) {
    let fields = [], tmp = []

    client.commands.forEach(command => {
      if (!tmp[command.info.category]) tmp[command.info.category] = []
      if (!tmp[command.info.category].includes(command.info.triggers[0])) tmp[command.info.category].push(command.info.triggers[0])
    })

    const categories = Object.keys(tmp)

    categories.forEach(category => {
      fields.push([category, `\`\`\`${tmp[category]}\`\`\``])
    })
    
    client.modules.embed({
      message: message,
      title: `Help.`,
      fields: fields
    })
  } else {
    if (!client.commands.has(args[0])) return
    else {
      const { info } = client.commands.get(args[0])
      const { triggers, description, usage, permissions, category } = info
      client.modules.embed({
        message: message,
        title: `${triggers[0]} - help.`,
        fields: [
          ['Triggers', `\`\`\`${triggers}\`\`\``],
          ['Description', `\`\`\`${description}\`\`\``],
          ['Usage', `\`\`\`${client.config.prefix}${triggers[0]} ${usage}\`\`\``],
          ['Category', `\`\`\`${category}\`\`\``]
        ]
      })
    } 
  }
}

exports.info = {
  triggers: ['help'],
  description: 'Display informations about command.',
  usage: '[command]',
  permissions: {
    bot: [],
    member: [],
    developer: false
  },
  category: 'misc'
}