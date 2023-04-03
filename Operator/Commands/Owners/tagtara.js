const {
    MessageEmbed,
    Discord
} = require("discord.js");
const conf = client.ayarlar
let mongoose = require("mongoose");
let sunucuayar = require("../../models/sunucuayar");
module.exports.run = async (client, message, args, durum, kanal) => {
	if (!message.guild) return;
    
    if (durum) {
        let Embed = new MessageEmbed().setAuthor(message.guild.name, message.guild.iconURL({dynamic: true})).setColor("RANDOM");
        let bg = message.guild.members.cache.filter(memberab => memberab.user.username.includes('✰')) 
        let data = await sunucuayar.findOne({guildID: message.guild.id});

        if (args[0] == "ver") {
            bg.forEach(r => {
                r.roles.add(data.TEAM)
            });
            message.reply({ embeds: [Embed.setDescription(`${client.emojis.cache.find(x => x.name === "ravgar_bit")} Sunucuda Taglı Rolü Olmayan Kullanıcılara <@&${data.TEAM}> rolü tanılandı. (\`${bg.size}\`)`)] }).catch((err) => console.log(err), message.react(`${client.emojis.cache.find(x => x.name === "ravgar_onay")}`)).then(e => setTimeout(() => e.delete().catch(() => { }), 20000))
        } else if (!args[0]) {
            message.reply({ embeds: [Embed.setDescription(`${client.emojis.cache.find(x => x.name === "ravgar_bit")} Sunucuda Tagsızlara Verilmek için Tanımlanan Rol;
${client.emojis.cache.find(x => x.name === "ravgar_bit")} Taglı Rol: <@&${data.TEAM}>
${client.emojis.cache.find(x => x.name === "ravgar_bit")} Sunucuda Taglı Rolü Bulunmayan Kullanıcı Sayısı \`${bg.size}\`
            
\` ➥ \` Kullanıcılara Rolü Vermek için \`.tagsız ver\` komutunu uygula.`)] }).catch((err) => console.log(err), message.react(`${client.emojis.cache.find(x => x.name === "ravgar_carpi")}`)).then(e => setTimeout(() => e.delete().catch(() => { }), 25000))
        }  

    } else return client.Embed(message.channel.id, `Bu komutu kullanabilmek için Sunucu Sahibi - Bot Sahibi olmalısın!`);
}
exports.conf = {aliases: ["tagtara", "tagsız"]}
exports.help = {name: 'tagdağıt'}
function removeItemOnce(arr, value) { var index = arr.indexOf(value); if (index > -1) { arr.splice(index, 1); } return arr; }