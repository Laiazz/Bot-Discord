const Discord = require("discord.js");
const { MessageSelectMenu, MessageActionRow } = require("discord.js");

module.exports = {

    name: "help",
    aliases: ["ajuda", "comandos", "commands", "h"],

    run: async(client, message, args) => {

        let embed_1 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setFooter(`Executado por - ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
        .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))   .setImage(`https://66.media.tumblr.com/d7138fbfb109415fb34d66b06a95d199/tumblr_pw2k86RpeM1rztjsno3_r1_540.gif`)
        .setTitle(`**Como posso te ajudar?**`)
        .setTimestamp()
        .setDescription(`**Comandos de diversão:**
Reaja com <:number1:970062293905834005>  para comandos de \`diversão\`.

**Comandos de informação:**
Reaja com <:numbre2:970062522478624808> para comandos de \`informação\`.

**Comandos de moderação:**
Reaja com <:numbre3:970062733930287164> para comandos de \`moderação\`.

**Comandos de economia:**
Reaja com <:numbre4:970062737457709086> para comandos de \`economia\`.

**Voltar:**
Reaja com <:seta:970062921101099049> para voltar há \`pagina inicial\`.`);

        let painel = new MessageActionRow().addComponents( new MessageSelectMenu()
        .setCustomId('menu')
        .setPlaceholder('Veja meus comandos.') // Mensagem estampada
        .addOptions([
               {
                    label: 'Pagina inicial',
                    description: 'Voltar para pagina inicial',
                    emoji: '<:seta:970062921101099049>',
                    value: 'painel_inicial',
               },
                {
                    label: 'diversão',                    
                    description: 'Veja meus comandos de diversão',
                    emoji: '<:number1:970062293905834005>',
                    value: 'utilidade',
                },
                {
                    label: 'informação',
                    description: 'Veja meus comandos de informação',
                    emoji: '<:numbre2:970062522478624808>',
                    value: 'moderacao',
                },
                {
                    label: 'moderação',
                    description: 'Veja meus comandos de moderação',
                    emoji: '<:numbre3:970062733930287164>',
                    value: 'diversao',
                },
                {
                    label: 'economia',
                    description: 'Veja meus comandos de economia',
                    emoji: '<:numbre4:970062737457709086>',
                    value: 'outros',
                },
            ])

        );


        message.reply({ content: `${message.author}`, embeds: [embed_1], components: [painel] }).then(msg => {

            const filtro = (interaction) => 
              interaction.isSelectMenu()
        
            const coletor = msg.createMessageComponentCollector({
              filtro
            });
        
            coletor.on('collect', async (collected) => {

              let valor = collected.values[0]
              collected.deferUpdate()

        if (valor === 'painel_inicial') {

             msg.edit({ content: `${message.author}`, embeds: [embed_1], components: [painel] });
    
        };
        
        if (valor === 'utilidade') {

            let embed_2 = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setFooter(`Executado por - ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
            .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))       .setImage(`https://66.media.tumblr.com/d7138fbfb109415fb34d66b06a95d199/tumblr_pw2k86RpeM1rztjsno3_r1_540.gif`)
            .setTitle(`**Comandos de diversão:**`)
            .setTimestamp()
            .setDescription(`Abaixo está uma lista de comandos que você pode ultilizar, utilize-os no chat destinado a comandos.
            
            <a:hatsune:824255769469648906> **Comandos disponíveis**
            
            \`\`\`8ball, circulo, cobra, coloruser, gay, gif, meme, sourcebin, stonks, webhook, youtube, perfil, say, qrcode, dados, achievement, oogway, mixnames, helpmemes, criarmeme, cr7, sans, futebol, duelo, punch, weather, zenitsu, tanjiro, anime\`\`\``);

            msg.edit({ content: `${message.author}`, embeds: [embed_2], components: [painel] });

        };

        if (valor === 'moderacao') {

            let embed_3 = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setFooter(`Executado por - ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
            .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))    .setImage(`https://66.media.tumblr.com/d7138fbfb109415fb34d66b06a95d199/tumblr_pw2k86RpeM1rztjsno3_r1_540.gif`)
            .setTitle(`**Comandos de informação:**`)
            .setTimestamp()
            .setDescription(`Abaixo está uma lista de comandos que você pode ultilizar, utilize-os no chat destinado a comandos.
            
           <:itadori:824256410715291689> **Comandos disponíveis**

            \`\`\`emojiinfo, sugestao, ping, uptime, lembrete, invite, channelinfo, botinfo, roleinfo, calculadora, google, wiki, servericon, banner, uptime, serverinfo, userinfo\`\`\``);

            msg.edit({ content: `${message.author}`, embeds: [embed_3], components: [painel] });

        };

        if (valor === 'diversao') {

            let embed_4 = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setFooter(`Executado por - ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
            .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))         .setImage(`https://66.media.tumblr.com/d7138fbfb109415fb34d66b06a95d199/tumblr_pw2k86RpeM1rztjsno3_r1_540.gif`)
            .setTitle(`**Comandos de moderação:**`)
            .setTimestamp()
            .setDescription(`Abaixo está uma lista de comandos que você pode ultilizar, utilize-os no chat destinado a comandos.

            <a:6884_animated_teasip:824255992836653067> **Comandos disponíveis**

            \`\`\`antilink, dm, lock, lockall, mute, tempmute, unlock, unlockall, unmute, setmsgdel, setmsgedit, setmute, setsugestao, setticket, clear, nuke, ban, unban, kick, reportbug\`\`\``);

            msg.edit({ content: `${message.author}`, embeds: [embed_4], components: [painel] });

        };

        if (valor === 'outros') {

            let embed_5 = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setFooter(`Executado por - ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
            .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))   .setImage(`https://66.media.tumblr.com/d7138fbfb109415fb34d66b06a95d199/tumblr_pw2k86RpeM1rztjsno3_r1_540.gif`)
            .setTitle(`**Comandos de economia:**`)
            .setTimestamp()            
            .setDescription(`Abaixo está uma lista de comandos que você pode ultilizar, utilize-os no chat destinado a comandos.

            <a:zerotwo:824257219830087711> **Comandos disponíveis**
            
            \`\`\`banco, mendigar, daily, depositar, topmoney, roubar, roleta, trabalhar\`\`\``);

            msg.edit({ content: `${message.author}`, embeds: [embed_5], components: [painel] });

        };
        
        
        })

    })

}
}