const Discord = require("discord.js"); 
const client = new Discord.Client({intents: 32767});
const config = require('./commands/Aparência/config/config.json')
const fs = require("fs");
const db = require('quick.db');

client.db = db

client.login(config.token); 

client.on('ready', () => {
    console.log(`✅ - iniciando`)
  })
  
  client.on("ready", () => {
      let status = [
          `${config.nomeserver}`,
          `Prefixo: ${config.prefix}`
      ],
      i = 0;
      setInterval(() => client.user.setActivity(`${status[i++ %
          status.length]}`, {
          type: "PLAYING"
      }), 20000);
  console.log(`✅ - Estou online ${client.user.username}`);
  });

client.on('messageCreate', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync(`./commands/`);

fs.readdirSync('./commands/').forEach(local => {
    const comandos = fs.readdirSync(`./commands/${local}`).filter(arquivo => arquivo.endsWith('.js'))

    for(let file of comandos) {
        let puxar= require(`./commands/${local}/${file}`)

        if(puxar.name) {
            client.commands.set(puxar.name, puxar)
        } 
        if(puxar.aliases && Array.isArray(puxar.aliases))
        puxar.aliases.forEach(x => client.aliases.set(x, puxar.name))
    } 
});

client.on("messageCreate", async (message) => {

    let prefix = config.prefix;
  
      if (message.author.bot) return;
      if (message.channel.type == 'dm') return;     
  
       if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
    
      if(message.author.bot) return;
      if(message.channel.type === 'dm') return;
  
      if(!message.content.startsWith(prefix)) return;
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
  
      let cmd = args.shift().toLowerCase()
      if(cmd.length === 0) return;
      let command = client.commands.get(cmd)
      if(!command) command = client.commands.get(client.aliases.get(cmd)) 
    
  try {
      command.run(client, message, args)
  } catch (err) { 
 
     console.error('Erro:' + err); 
  }

  let canal = '1066894874152026122'//id do canal de text..
    
  if (canal.includes(String(message.channel.id)) && message.member.roles.cache.has('1067244027918942248')) {
    client.db.add(`recep${message.member.id}`, 1)
    let valor = client.db.get(`promo_${message.member.id}`) || 2

    let recep = client.db.get(`recep${message.member.id}`)

    if (recep === 150) {

      client.db.add(`subrecep${message.member.id}`, 150)

      client.db.add(`pontos${message.member.id}`, 2 * valor)
      client.db.delete(`recep${message.member.id}`)
    }
  }

    });

    client.on('guildMemberAdd', (member) => {
        let guild = client.guilds.cache.get('1066891255235223612');
        let channel = guild.channels.cache.get('1066894838861152336');
        let embed = new Discord.MessageEmbed()
      
          .setColor('#FFFFFF')
          .setDescription(`${member} Seja bem vindo (a) ${member.guild.name}`)
      
        channel.send({ embeds: [embed] });
    
    }); 
