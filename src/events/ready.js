module.exports = () => {
  require('../handlers/plugins.js')()
  Johny.console.log(`${Johny.user.tag} is ready.`)
}