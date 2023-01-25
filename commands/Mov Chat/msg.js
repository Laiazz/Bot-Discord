const Discord = require('discord.js');
const moment = require('moment');
moment.locale('pt-BR');


module.exports = {
    
    name: "msg", // Coloque o nome do comando do arquivo
 

    run: async(client, message, args) => {
    setTimeout(() => message.delete(), 0)

    var CargoStaff = '1067244027918942248'//cargo staff movchat

    if(!message.member.roles.cache.has(CargoStaff)) return message.reply('Você não tem permissão para usar esse comando!')
        
    const user = message.mentions.members.first() || message.author

    let recep = client.db.get(`recep${user.id}`) || '0'
    let subrecep = client.db.get(`subrecep${user.id}`) || '0'
    let pontoMSG = client.db.get(`pontos${user.id}`) || '0'

    let embed = new Discord.MessageEmbed()
      .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true })})
      .setColor('#000001')
      .setDescription(
                          `> Usuário: ${user}\n\n` + 
                          `Quantidade de mensagens: ${recep}\n` + 
                          `Quantidade de pontos: ${pontoMSG}`
                     )
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setFooter({ text: `ID: ${message.guild.id}`, iconURL: message.guild.iconURL({ dynamic: true })})

    message.channel.send({ embeds: [embed]})
        //client.db.all().filter(x => x.ID.startsWith('pontos')).forEach(x => client.db.delete(x.ID))

    }
}