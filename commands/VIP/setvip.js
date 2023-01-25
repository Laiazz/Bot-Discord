const discord = require("discord.js")
const config = require('../../commands/Aparência/config/config.json')
const ms = require("ms")

module.exports = {

name: "setvip",
 

run: async(client, message, args) => {

  if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply({ content: "Não tem permissão para esse comando!" })
  if (!message.guild.me.permissions.has('ADMINISTRATOR')) return message.reply({ content: "Não tenho permissão administrativas!" })


  let time = args[0]
  if (!time) return message.reply({ content: "**Use esse comando para \n\nComo usar?\`s!vip\`\n\nExemplos:\n\`s!vip   \`**" })
  if (ms(time) > ms("366d")) return message.reply({ content: "você não pode adicionar um vip a Mais de 1 Ano" })


  let membro = message.mentions.users.first();
  if (!membro) return message.reply({ content: 'Para poder executar o comando, tem que mencionar um membro!' })

  let vip =
    message.guild.roles.cache.find(r => r.name == args[1]) ||
    message.guild.roles.cache.find(r => r.id == args[1]) ||
    message.mentions.roles.first() ||
    args.join(" ");

  var role = message.guild.roles.cache.find(r => r.name === args[1]) ||
    message.guild.roles.cache.find(r => r.id == args[1]) ||
    message.mentions.roles.first()

  if (!role) return message.reply({ content: `esse vip não existe nesse servidor.` })

  if (!vip) return message.reply({ content: 'Para poder executar o comando, tem que mencionar um vip!' })


  const embed = new discord.MessageEmbed()
    .setTitle(`Vip Adicionado`)
    .setColor(config.embed)
    .setDescription(`**Adicionado por : ${message.author} \n Tempo : ${time} \n Vip  : ${vip}**`)
    .setThumbnail(config.fotobot)
    .setTimestamp()
  message.channel.send({ embeds: [embed] })
  message.guild.members.cache.get(membro.id).roles.add(vip);

  setTimeout(() => {
    message.guild.members.cache.get(membro.id).roles.remove(vip).catch(e => message.reply(e))

  }, ms(time))


    }
}