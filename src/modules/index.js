// Thanks for badosz0 [https://github.com/badosz0/badosz-bot]

require('fs')
  .readdirSync(__dirname)
  .filter(file => file !== 'index.js' && file.includes('.'))
  .map(filename => {
    const moduleName = filename.split('.')[0]
    exports[moduleName] = require(`${__dirname}/${filename}`)
})