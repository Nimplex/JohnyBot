module.exports = class events {
  constructor(Johny) {
    Johny.on('ready', () => require('../events/ready.js')())
    Johny.on('message', message => require('../events/message.js')(message))
  }
}