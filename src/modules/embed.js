const { MessageEmbed } = require('discord.js')

module.exports = data => {
  const embed  = new MessageEmbed()
  const config = Object.assign({ 
    title: '', 
    color:  client.config.color, 
    description: '',
    thumbnail: '',
    image: '',
    author: '',
    fields: [],
    footer: `Invoked by ${data.message.author.tag}`,
    timestamp: new Date(),
    message: ''
  }, data)
  if (config.title)       embed.setTitle(config.title)
  if (config.color)       embed.setColor(config.color)
  if (config.description) embed.setDescription(config.description)
  if (config.thumbnail)   embed.setThumbnail(config.thumbnail)
  if (config.image)       embed.setImage(config.image)
  if (config.footer)      embed.setFooter(config.footer)
  if (config.timestamp)   embed.setTimestamp(config.timestamp)
  if (config.fields)      embed.addFields(config.fields)
  config.message.channel.send(embed)
}