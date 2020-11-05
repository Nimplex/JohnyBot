const { MessageEmbed } = require('discord.js')

module.exports = data => {
  const conf   = Object.assign({ 
    object: undefined,
    thumbnail: undefined,
    image: undefined,
    author: undefined,
    title: undefined,
    description: undefined,
    fields: [],
    footer: `Invoked by ${data.object.author.tag}`,
    timestamp: new Date(),
    color: Johny.colors.yellow
  }, data)
  const embed  = new MessageEmbed()
  if (conf.thumbnail)   embed.setThumbnail(conf.thumbnail)
  if (conf.image)       embed.setImage(conf.image)
  if (conf.author)      embed.setAuthor(conf.author[0], conf.author[1])
  if (conf.title)       embed.setTitle(conf.title)
  if (conf.description) embed.setDescription(conf.description)
  if (conf.footer)      embed.setFooter(conf.footer)
  if (conf.timestamp)   embed.setTimestamp(conf.timestamp)
  if (conf.color)       embed.setColor(conf.color)
  if (conf.fields) {    conf.fields.forEach(field => embed.addField(field[0], field[1], field[2] || false)) }
  conf.object.channel.send(embed)
}