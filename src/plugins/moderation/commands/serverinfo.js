exports.exec = async ({ message, args }) => {
  Johny.models.embed({
    object: message,
    title: `Informations about ${message.guild.name}`,
    thumbnail: message.guild.iconURL(),
    fields: [
      ['Name', `\`\`\`${message.guild.name}\`\`\``, true],
      ['Created at', `\`\`\`${new Date(message.guild.createdAt).toLocaleDateString()}\`\`\``, true],
      ['Guild owner', `\`\`\`${message.guild.owner.user.tag}\`\`\``, true],
      ['Owner id', `\`\`\`${message.guild.ownerID}\`\`\``, true],
      ['Guild id', `\`\`\`${message.guild.id}\`\`\``, true],
      ['Guild region', `\`\`\`${message.guild.region}\`\`\``, true],
      ['Afk channel', `\`\`\`${message.guild.afkChannel ? message.guild.afkChannel.name : 'None'}\`\`\``, true],
      ['Afk timeout', `\`\`\`${message.guild.afkTimeout}s\`\`\``, true],
      ['Members count', `\`\`\`${message.guild.memberCount}\`\`\``, true],
      ['Voice channels', `\`\`\`${message.guild.channels.cache.filter(channel => channel.type === 'voice').size}\`\`\``, true],
      ['Text channels', `\`\`\`${message.guild.channels.cache.filter(channel => channel.type === 'text').size}\`\`\``, true]
    ]
  })
}

exports.data = {
  triggers: ['serverinfo', 'server'],
  description: 'Check informations about server.',
  usage: '',
  permissions: {
    bot: ['MANAGE_GUILD'],
    member: [''],
  }
}