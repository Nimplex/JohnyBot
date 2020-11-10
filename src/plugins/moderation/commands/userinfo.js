exports.exec = async ({ message, args }) => {
  const member = message.mentions.members.first() ? message.mentions.members.first() : message.member
  console.log(member)
  Johny.models.embed({
    object: message,
    title: `Informations about ${member.user.username}`,
    thumbnail: member.user.displayAvatarURL(),
    fields: [
      ['Username', `\`\`\`${member.user.tag}\`\`\``, true],
      ['Nickname', `\`\`\`${member.nickname || 'None'}\`\`\``, true],
      ['Created at', `\`\`\`${new Date(member.user.createdAt).toLocaleDateString()}\`\`\``, true],
      ['Joined at', `\`\`\`${new Date(member.joinedAt).toLocaleDateString()}\`\`\``, true],
      ['Guild owner?', `\`\`\`${member.user.id == member.guild.ownerID ? 'Yes' : 'No'}\`\`\``, true],
      ['Bot?', `\`\`\`${member.user.bot ? 'Yes' : 'No'}\`\`\``, true],
      ['User id', `\`\`\`${member.user.id}\`\`\``, true],
      ['Role hex', `\`\`\`${member.displayHexColor}\`\`\``, true]
    ]
  })
}

exports.data = {
  triggers: ['userinfo', 'user'],
  description: 'Check informations about user.',
  usage: '[@mention]',
  permissions: {
    bot: [''],
    member: [''],
  }
}