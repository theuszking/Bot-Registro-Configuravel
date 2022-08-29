const Discord = require("discord.js")

module.exports = {
    name: "setregister", // Coloque o nome do comando do arquivo
    aliases: ["sr"], // Coloque sinônimos aqui

    run: async(client, message, args) => {
        

        if (!message.member.permissions.has("ADMINISTRATOR")) {
            message.reply(`Você não possui a permissão \`Administrador\` para utilizar este comando.`)
        } else {
            let canal = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
            if (!canal) { 
                message.reply({ embeds: [
                    new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setDescription(`\`!setregister [canal]\``)
                ] })
            } else {
                message.reply(`O canal de texto ${canal} foi configurado.`);
                canal.send({ embeds: [
                    new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`<a:pink_seta:936411140693577789> **Responda as perguntas abaixo para se registrar no nosso servidor.**`)
                    .setDescription(`<a:l_seta:936433404155678720> | Homem, mulher ou não binário? (resposta obrigatória)\n<a:l_seta:936433404155678720> | Maior ou menor de 18 anos? (resposta obrigatória)\n<a:l_seta:936433404155678720> | Hétero ou LGBTQI+? (resposta obrigatória)\n<a:l_seta:936433404155678720> | Qual é o seu estado civil?(solteiro, namorando, enrolado ou casado)\n\n<a:l_seta:936433404155678720> | Todas as perguntas são Obrigatorias!`)
                    .setFooter(`${message.guild.name}`, message.guild.iconURL({format: "png"}))
          .setTimestamp()
                ], components: [

                ] })
            }
        }

       
        
    }
}