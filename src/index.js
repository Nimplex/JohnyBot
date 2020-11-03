const { Client, Collection } = require('discord.js')

class client extends Client {
  constructor(conf) {
    super(conf)

    global.client = this
    
    this.commands = new Collection()
    this.modules  = require('./modules')
    this.config   = require('../config')
    this.events   = require('./handlers/events.js')(this)

    this.login(this.config.token)
  }
}

new client()