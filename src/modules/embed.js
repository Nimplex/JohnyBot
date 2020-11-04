const { MessageEmbed } = require('discord.js')

module.exports = data => {
  const embed  = new MessageEmbed()
  const config = Object.assign({ 
    title: undefined, 
    color:  client.config.color, 
    description: undefined,
    thumbnail: undefined,
    image: undefined,
    author: undefined,
    fields: undefined,
    footer: `Invoked by ${data.message.author.tag}`,
    timestamp: new Date(),
    message: undefined
  }, data)
  if (config.title)       embed.setTitle(config.title)
  if (config.color)       embed.setColor(config.color)
  if (config.description) embed.setDescription(config.description)
  if (config.thumbnail)   embed.setThumbnail(config.thumbnail)
  if (config.image)       embed.setImage(config.image)
  if (config.author)      embed.setAuthor(config.author[0], config.author[1])
  if (config.footer)      embed.setFooter(config.footer)
  if (config.timestamp)   embed.setTimestamp(config.timestamp)
  if (config.fields)    { config.fields.forEach(field => embed.addField(field[0], field[1], field[2])) }
  config.message.channel.send(embed)
}