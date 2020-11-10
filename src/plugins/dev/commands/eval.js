const clean = text => {
  if (typeof(text) === 'string') return text.replace(/`/g, "'`" + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203))
  else return text
}

exports.exec = async ({ message, args }) => {
  try {
    message.react('👍')

    const code = args.join(' ');
    let evaled = eval(code);

    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);

    const hasteurl = await Johny.models.hastebin(evaled)
    Johny.models.embed({
      object: message.author,
      title: 'Success',
      description: `[bin](${hasteurl[0]}) | [raw](${hasteurl[1]})`,
    })
  } catch (err) {
    const hasteurl = await Johny.models.hastebin(err)
    Johny.models.embed({
      object: message.author,
      title: 'Error',
      color: Johny.colors.red,
      description: `[bin](${hasteurl[0]}) | [raw](${hasteurl[1]})`,
    })
  }
}

exports.data = {
  triggers: ['eval', 'exec'],
  description: 'eval.',
  usage: undefined,
  permissions: {
    bot: ['MANAGE_GUILD'],
    member: [''],
  }
}