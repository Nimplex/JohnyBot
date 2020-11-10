module.exports = () => {
  require('../handlers/plugins.js')()
  Johny.console.log(`${Johny.user.tag} ${Math.floor(Math.random() * 100) == 20 ? 'will Rock now': 'is ready'}.`)
}