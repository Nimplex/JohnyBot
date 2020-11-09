exports.exec = async ({ message, args }) => {
  if (!args[0]) return Johny.models.error(message, 'Please provide valid arguments.')
  const answers = [
    'It\'s decidedly so',
    'Yes definitely',
    'As I see it, yes',
    'Most likely',
    'Yes',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'My reply is no',
    'My sources say no',
    'No'
  ]
  Johny.models.embed({
    object: message,
    title: ':8ball: 8Ball',
    description: `\`\`\`${answers[Math.floor(Math.random()*answers.length)]}\`\`\``
  })
}

exports.data = {
  triggers: ['8ball'],
  description: 'Ask question and get answer.',
  usage: '<text>',
  permissions: {
    bot: [],
    user: []
  }
}