const { red } = require('chalk')

module.exports = (messageObject, errorMessage) => {
  client.modules.embed({
    title: 'Error',
    color: client.config.rcolor,
    description: `\`\`\`An unexpected error has occurred. Error message: ${errorMessage}\`\`\``,
    message: messageObject
  })
  console.error(`Error: ${red(errorMessage)}`)
  return
}