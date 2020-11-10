const { Client } = require('discord.js')

class Johny extends Client {
  constructor(conf) {
    super(conf)

    global.Johny      = this
    this.commands     = 0
    this.files        = ['tokens', 'prefixes', 'colors']; this.files.forEach(file => this[file] = require(`./files/${file}`))
    this.prefix       = this.prefixes.prefix
    this.http         = require('node-fetch')
    this.models       = require('./models')
    this.console      = require('./handlers/console.js')
    this.eventHandler = new (require('./handlers/events.js'))(this)

    this.login(this.tokens.discord)
  }
}

new Johny()