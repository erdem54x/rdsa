const { MessageEmbed, Discord } = require("discord.js");
const { link } = require("fs");
const conf = client.ayarlar
let mongoose = require("mongoose");
module.exports.run = async (client, message, args, durum, kanal) => {
	if (!message.guild) return;
    
    if (message.member.permissions.has("ADMINISTRATOR") || durum) {

     let everyone = message.guild.roles.cache.find(a => a.name === "@everyone");
        if (message.channel.permissionsFor(everyone).has('SEND_MESSAGES')) {
          await message.channel.permissionOverwrites.edit(everyone.id, { SEND_MESSAGES: false });
          message.react("🔒")
          await message.reply({ content: `Kanal Kilitlendi.` }).then(e => setTimeout(() => e.delete().catch(() => { }), 10000))
        } else {
          await message.channel.permissionOverwrites.edit(everyone.id, { SEND_MESSAGES: null });
          message.react("🔑")
          await message.reply({ content: `Kanal Kilidi Açıldı.` }).then(e => setTimeout(() => e.delete().catch(() => { }), 10000))
        }; 
   
      }
}
exports.conf = {aliases: ["kilit"]}
exports.help = {name: 'Kilit'}
