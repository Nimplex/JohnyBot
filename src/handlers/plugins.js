// Thanks for badosz0

const fs = require('fs')

module.exports = async () => {
  Johny.plugins = []
  const plugins = fs.readdirSync(`${__dirname}/../plugins`)

  for (const pluginPath of plugins) {
    const plugin = require(`../plugins/${pluginPath}`)
    Johny.plugins.push(plugin)
  }

  Johny.plugins.forEach(plugin => { Johny.commands += plugin.commands.length })
  
  Johny.console.log(`Loaded ${Johny.commands} commands.`)
  Johny.console.log(`Loaded ${Johny.plugins.length} plugins.`)
}