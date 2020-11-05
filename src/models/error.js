module.exports = (object, message) => { 
  Johny.models.embed({
    object: object,
    description: `\`\`\`${message}\`\`\``,
    color: Johny.colors.red
  })
}