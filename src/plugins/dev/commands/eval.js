const clean = text => {
  if (typeof(text) === 'string') return text.replace(/`/g, "'`" + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203))
  else return text
}

exports.exec = async ({ message, args }) => {
  try {
    const code = args.join(' ');
    let evaled = eval(code);

    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);

    Johny.http('https://hastebin.com/documents', { method: 'post', body: evaled }).then(res => res.json()).then(json => { 
      Johny.models.embed({
        object: message.author,
        title: 'Success',
        description: `[bin](https://hastebin.com/${json.key}) | [raw](https://hastebin.com/raw/${json.key})`,
      })
    })
  } catch (err) {
    Johny.http('https://hastebin.com/documents', { method: 'post', body: err }).then(res => res.json()).then(json => { 
      Johny.models.embed({
        object: message.author,
        title: 'Error',
        color: Johny.colors.red,
        description: `[bin](https://hastebin.com/${json.key}) | [raw](https://hastebin.com/raw/${json.key})`,
      })
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