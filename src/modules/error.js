const { red } = require('chalk')

module.exports = (messageObject, errorMessage, log = false) => {
  client.modules.embed({
    title: 'Error',
    color: client.config.rcolor,
    description: `\`\`\`An unexpected error has occurred. Error message: ${errorMessage}\`\`\``,
    message: messageObject
  })
  if(log) console.error(`Error: ${red(errorMessage)}`)
}