exports.execute = (client, message, args) => {
  if (!args[0]) return client.modules.error(message, 'Please provide valid arguments.')
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
  client.modules.embed({
    message: message,
    title: ':8ball: 8Ball',
    description: `\`\`\`${answers[Math.floor(Math.random()*answers.length)]}\`\`\``
  })
}

exports.info = {
  triggers: ['8ball'],
  description: 'Ask a question and get a simple answer.',
  usage: '<question>',
  permissions: {
    bot: [],
    member: [],
    developer: false
  },
  category: 'fun'
}